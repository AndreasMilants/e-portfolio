import Game from "./game";
import {highestIndex} from "./math";
import Network from "./neuralNets";

class NetworkPlayer {
    constructor(network, gamesToPlay, gameSize, senseFunc) {
        this.network = network;
        this.gamesTopPlay = gamesToPlay;
        this.gameSize = gameSize;

        this.games = [...Array(gamesToPlay)].map(_ => new Game(gameSize));
        this.currentGame = 0;

        this.senseFunc = senseFunc;
        this.scores = [...Array(gamesToPlay)].map(_ => 0);

        this.movesWithoutFood = 0;
    }

    finished() {
        return this.currentGame === this.gamesTopPlay;
    }

    tick() {
        if (this.currentGame === this.gamesTopPlay) return;  // All games were played
        if (this.games[this.currentGame].gameOver) {
            this.currentGame++;  // We died in this game, let's start the next one
            if (this.currentGame === this.gamesTopPlay) return;
        }
        // Determine a move
        let game = this.games[this.currentGame];
        let input = this.senseFunc.toInput(game);
        let output = this.network.inputToOutput(input);

        // Set the orientation to the index with the highest value of our output
        game.orientation = this.senseFunc.toOrientation(output, game);

        if (game.facingInDirectionOfFood()) this.scores[this.currentGame]++;
        else this.scores[this.currentGame] -= 1;

        // Tick
        let foundFood = game.tick();
        if (foundFood) {
            this.movesWithoutFood = 0;
            this.scores[this.currentGame] += this.gameSize * 1.5;
        }
        else {
            this.movesWithoutFood++;
            if (this.movesWithoutFood > this.gameSize * this.gameSize / 3) {
                this.currentGame++;  // There were too many moves without progress, the snake is probably going in circles
            }
        }
    }

    averageScore() {
        return this.scores.reduce((acc, val) => acc + val) / this.gamesTopPlay;
    }

    highestPoints() {
        return this.games.map(g => g.points).reduce((acc, val) => val > acc ? val : acc, 0);
    }
}

class UnSupervised {
    constructor(startNetwork, generationSize, gamesForAverage, gameSize, senseFunc) {
        this.baseNetwork = startNetwork;
        this.senseFunc = senseFunc;
        this.gamesForAverage = gamesForAverage;
        this.gameSize = gameSize;
        this.generationSize = generationSize;
        this.currentGen = 1;

        this.players = [];
        this.createNewGeneration();
        this.highestPoints = 0;
    }

    createNewGeneration() {
        let networks = [...Array(this.generationSize - 1).keys()].map((_, i) => this.baseNetwork.mutate(i / this.generationSize / 5));
        networks.push(new Network(this.baseNetwork.layers));  // Add 1 random every generation, to escape local minima.
        this.players = networks.map(n => new NetworkPlayer(n, this.gamesForAverage, this.gameSize, this.senseFunc));
    }

    tick() {
        if (this.players.every(p => p.finished())) {
            let bestPlayer = highestIndex(this.players.map(p => p.averageScore()));
            this.baseNetwork = this.players[bestPlayer].network;
            let highestPointsThisGen = this.players.map(p => p.highestPoints()).reduce((acc, val) => acc > val ? acc : val, 0);
            this.highestPoints = Math.max(this.highestPoints, highestPointsThisGen);
            this.createNewGeneration();
            this.currentGen++;
        }
        this.players.forEach(p => p.tick());
    }
}

export {
    UnSupervised
}