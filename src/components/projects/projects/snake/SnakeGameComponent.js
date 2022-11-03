import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {UnSupervised} from "./unSupervised";
import Network from "./neuralNets";
import {SmellAndFeel, Surrounding} from "./senseFuncs";
import {
    Button,
    IconButton,
    MobileStepper,
    Slider,
    Step,
    StepLabel,
    Stepper,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Point} from "./math";

function KeyboardArrowRight() {
    return null;
}

function KeyboardArrowLeft() {
    return null;
}

class SnakeGameComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeStep: 1,
            games: {
                manager: new UnSupervised(new Network([6, 3]), 10, 3, 20, new SmellAndFeel()),
                speed: 100,
                playing: false
            },
            setUp: {
                type: "unsupervised",
                senseFunc: new SmellAndFeel(),
                layers: [],
                generationSize: 8,
                gamesPerGen: 3,
                fieldSize: 20,
                done: false,
            }
        };
    }

    render() {
        let steps = this.getSteps();
        let activeStep = this.state.activeStep;
        return <article className="snake-ai">
            <h1>Snake</h1>
            <div className="desktop">
                <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
                    <Button size="small" onClick={this.back} disabled={activeStep === 0}>
                        <KeyboardArrowLeft/>Back
                    </Button>
                    <Stepper sx={{width: "100%"}} activeStep={activeStep} alternativeLabel>
                        {steps.map((label, index) => <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>)}
                    </Stepper>
                    <Button size="small" onClick={this.next}
                            disabled={activeStep === steps.length - 1 || activeStep < 2}>
                        Next<KeyboardArrowRight/>
                    </Button>
                </div>
            </div>
            <div className="mobile">
                <MobileStepper activeStep={activeStep} alternativeLabel steps={steps.length}
                               variant="progress"
                               sx={{width: "100%", flexGrow: 1}}
                               nextButton={
                                   <Button size="small" onClick={this.next}
                                           disabled={activeStep === steps.length - 1}>
                                       Next<KeyboardArrowRight/>
                                   </Button>
                               }
                               backButton={
                                   <Button size="small" onClick={this.back} disabled={activeStep === 0}>
                                       <KeyboardArrowLeft/>Back
                                   </Button>
                               }>
                </MobileStepper>
            </div>
            <div className="stepper-show">
                <div className={activeStep === 0 ? "active type" : "type"}>
                    <button className="card" onClick={this.unsupervised}>
                        <div className="img"
                             style={{backgroundImage: "url('" + process.env.PUBLIC_URL + "snake_ai/snake_ai.png"}}></div>
                        <h3>Unsupervised</h3>
                    </button>
                    <button className="card">
                        <div className="img"
                             style={{backgroundImage: "url('" + process.env.PUBLIC_URL + "snake_ai/coming_soon.png')"}}></div>
                        <h3>Supervised</h3>
                    </button>
                </div>
                <div className={activeStep < 1 ? "right senses" : activeStep === 1 ? "active senses" : "senses"}>
                    <button className="card" onClick={this.smellAndFeel} style={{position: "relative"}}>
                        <div style={{width: "50%"}} className="game">

                        </div>
                        <h3>Smell and feel</h3>
                        <p>
                            In this version, the snake will know what direction the food is in. It can 'smell' the food.
                            The snake will also be able to know whether it can go immediately left, right or forward.
                        </p>
                        <p>
                            <b>Techical </b> The input consists of 6 values, all zeroes or ones. The first value is
                            whether the food is to the left, the second whether it is up ahead and the third whether it
                            is to the right of the snake's current direction. The last 3 values represent the
                            availability of the square next to the head of the snake in some direction.
                        </p>
                    </button>
                    <button className="card" onClick={this.surroundAndSmell}>
                        <h3>Surround view and smell</h3>
                        <p>In this version, the snake is able to see 2 squares in every direction from its head. It also
                            knows in what direction the food is.</p>
                        <p className="game">
                            Technically the snake should be able to get higher scores with enough training. But since
                            the input is so much bigger, it will take a lot longer to train.
                            <svg viewBox={"0 0 10 10"} width={"50%"}>
                                {
                                    [new Point(1, 9), new Point(2, 9), new Point(3, 9), new Point(4, 9)].map((p, i) =>
                                        <rect
                                            className={i === 3 ? "snake head" : "snake"}
                                            key={"" + p.x + "," + p.y} x={p.x} y={p.y} width="1"
                                            height="1"/>)
                                }
                                {
                                    <circle className="food" cx={6.5} cy={6.5} r={.35}
                                            width="1" height="1"/>
                                }
                            </svg>
                        </p>
                    </button>
                </div>
                <div className={activeStep < 2 ? "right network" : activeStep === 2 ? "active network" : "network"}>
                    <p>
                        The network is the brain of the snake. The more complex the network, the more complex behavior
                        the snake can learn. It unfortunately also means that it will take much more training to get
                        a snake which is able to navigate the field.
                    </p>
                    <p>
                        A neural network always has at least 2 layers, the input and output layer. The input of a
                        network depends on the state of the game and the senses-function you chose before.
                        Between each layer there are connections which determine the values of the nodes in the next
                        layer. Every step of the snake, the output will be calculated by passing the input through this
                        network. The output of the network in this case will consist of 3 nodes, each one representing a
                        direction for the snake to move in.
                    </p>
                    <p>
                        Without any knowledge of neural networks and the problem at hand, it is not easy to know how
                        many layers your network should consist of and how many nodes there should be in every layer.
                        It often requires a little bit of trial and error.
                        If you want to be able to quickly see results, I recommend sticking to 2 layers.
                    </p>
                    <div className="layer-buttons">
                        <Button disabled={this.state.setUp.layers.length <= 0} onClick={this.removeLayer}
                                variant="contained">Remove layer</Button>
                        <Button disabled={this.state.setUp.layers.length >= 3} onClick={this.addLayer}
                                variant="contained">Add layer</Button>
                    </div>
                    <div className="the-network">
                        <div className="layer input">
                            {[...Array(this.state.setUp.senseFunc.inputSize)].map((_, i) => <div key={i}
                                                                                                 className="node"></div>)}
                        </div>
                        {
                            this.state.setUp.layers.map((l, i) => <div key={i} className="layer">
                                <IconButton disabled={l > 10}
                                            onClick={_ => this.addToLayer(i, 1)}><AddIcon/></IconButton>
                                {[...Array(l)].map((_, i) => <div key={i} className="node"></div>)}
                                <IconButton disabled={l < 3}
                                            onClick={_ => this.addToLayer(i, -1)}><RemoveIcon/></IconButton>
                            </div>)
                        }
                        <div className="layer output">
                            {[...Array(3)].map((_, i) => <div key={i} className="node"></div>)}
                        </div>
                    </div>
                </div>
                <div className={activeStep < 3 ? "right setup" : activeStep === 3 ? "active setup" : "setup"}>
                    <p>
                        We will train our snake generation by generation. We will start with random values for the
                        connections between layers and tweak these values to get better results over time.
                    </p>
                    <p>
                        Each generation our best snake will make it to the next generation and will be slightly mutated
                        to create an entirely new generation. Over time, we expect to get a snake that will perform
                        better and better.
                    </p>
                    <p>
                        Of course, it is always possible that our snake messed up by accident. To make sure we don't
                        throw away a good snake because of this, we will let each snake play multiple games every
                        generation.
                    </p>
                    <p>
                        You can play with the sliders below to choose your own setup.
                    </p>
                    <UnSupervisedSetUpComponent setUp={this.state.setUp} update={this.updateSetUp}/>
                </div>
                <div className={activeStep === 4 ? "active" : "right"}>
                    <UnSupervisedPlayingComponent {...this.state.games} updateGames={this.updateGames}
                                                  play={this.play}/>
                </div>

            </div>
        </article>
            ;
    }

    addToLayer = (layer, amount) => {
        let layers = this.state.setUp.layers;
        layers[layer] += amount;
        this.setState({...this.state, setUp: {...this.state.setUp, layers}});
    }

    addLayer = () => {
        let layers = this.state.setUp.layers;
        layers.push(4);
        this.setState({...this.state, setUp: {...this.state.setUp, layers}});
    }

    removeLayer = () => {
        let layers = this.state.setUp.layers;
        layers.shift();
        this.setState({...this.state, setUp: {...this.state.setUp, layers}});
    }

    getSteps = () => {
        return ["Type", "Senses", "Network", "Setup", "Play"];
    }

    back = () => {
        this.setState({
            ...this.state,
            activeStep: this.state.activeStep - 1,
            games: {...this.state.games, playing: false}
        });
    }

    unsupervised = () => {
        this.setState({
            ...this.state,
            activeStep: this.state.activeStep + 1,
            setUp: {...this.state.setUp, type: "unsupervised"}
        });
    }

    smellAndFeel = () => {
        this.setState({
            ...this.state,
            activeStep: this.state.activeStep + 1,
            setUp: {...this.state.setUp, senseFunc: new SmellAndFeel()}
        });
    }

    surroundAndSmell = () => {
        this.setState({
            ...this.state,
            activeStep: this.state.activeStep + 1,
            setUp: {...this.state.setUp, senseFunc: new Surrounding()}
        });
    }

    next = () => {
        if (this.state.activeStep === this.getSteps().length - 2) {
            let manager = new UnSupervised(new Network([this.state.setUp.senseFunc.inputSize, ...this.state.setUp.layers, 3]), this.state.setUp.generationSize, this.state.setUp.gamesPerGen, this.state.setUp.fieldSize, this.state.setUp.senseFunc);
            this.setState({
                ...this.state,
                activeStep: this.state.activeStep + 1,
                games: {...this.state.games, manager}
            });
            return;
        }
        this.setState({...this.state, activeStep: this.state.activeStep + 1});
    }

    updateSetUp = (field, value) => {
        let setUp = {...this.state.setUp};
        setUp[field] = value;
        this.setState({...this.state, setUp});
    }

    updateGames = (field, value) => {
        let games = {...this.state.games};
        games[field] = value;
        this.setState({...this.state, games});
    }

    play = () => {
        this.setState({...this.state, games: {...this.state.games, playing: true}}, this.loop);
    }

    loop = () => {
        if (this.state.games.playing) {
            this.state.games.manager.tick();
            this.setState(this.state, _ => setTimeout(this.loop, -600 * Math.log10(this.state.games.speed) + 1201));
        }
    }
}

class UnSupervisedSetUpComponent extends Component {
    render() {
        let ranges = [
            {title: "Snakes per generation", min: 2, max: 20, field: "generationSize"},
            {title: "Games per snake", min: 2, max: 5, field: "gamesPerGen"},
            {title: "Size of field", min: 10, max: 40, field: "fieldSize"},
        ]
        return <div className="setUp">
            {ranges.map(r => <div key={r.title} className="range-slider">
                <label>{r.title}</label>
                <Slider
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={r.min}
                    max={r.max}
                    value={this.props.setUp[r.field]}
                    onChange={e => this.props.update(r.field, parseInt(e.target.value))}/>
            </div>)}
        </div>;
    }
}

class UnSupervisedPlayingComponent extends Component {
    render() {
        return <div>
            <PlayControlComponent {...this.props}/>
            <div className="snake-overview">
                <div>
                    <b>Current generation </b>{this.props.manager.currentGen}
                </div>
                <div>
                    <b>Most points </b>{this.props.manager.highestPoints}
                </div>
            </div>
            <hr/>
            <div className="snake-games">
                {
                    this.props.manager.players.map((p, i) => <SinglePlayerComponent key={i} index={i} player={p}
                                                                                    scale={10}/>)
                }
            </div>
        </div>;
    }
}

class SinglePlayerComponent extends Component {
    render() {
        let player = this.props.player;

        let game = player.finished() ? player.games[player.games.length - 1] : player.games[player.currentGame];
        return (
            <div className="game">
                <SingleGameComponent game={game}/>
                <div className="info">
                    <h4 style={{margin: "0 0 .5rem 0"}}>Points</h4>
                    {player.games.map((g, i) => <div key={i} className="score">
                        <span>Game {i + 1}</span><span>{g.points}</span>
                    </div>)}
                </div>
                {player.finished() ? <div className="overlay">Finished</div> : ""}
            </div>);
    }
}

class PlayControlComponent extends Component {
    render() {
        return <div>
            <div className="snake-controls">
                <div className="range-slider">
                    <label>Speed</label>
                    <Slider aria-label="Speed"
                            valueLabelDisplay="auto"
                            step={10}
                            marks
                            min={10}
                            max={100}
                            value={this.props.speed}
                            onChange={e => this.props.updateGames("speed", parseInt(e.target.value))}/>
                </div>
                <div className="play-buttons">
                    {this.props.playing ?
                        <button className="material-icons pause"
                                onClick={_ => this.props.updateGames("playing", false)}>pause</button> :
                        <button className="material-icons play"
                                onClick={this.props.play}>play_arrow</button>}
                </div>
            </div>
        </div>;
    }
}

class SingleGameComponent extends Component {
    render() {
        let game = this.props.game;
        return <svg viewBox={"0 0 " + game.size + " " + game.size}>
            {
                game.snake.map((p, i) => <rect className={i === game.snake.length - 1 ? "snake head" : "snake"}
                                               key={"" + p.x + "," + p.y} x={p.x} y={p.y} width="1"
                                               height="1"/>)
            }
            {
                <circle className="food" cx={game.food.x + .5} cy={game.food.y + .5} r={.35} width="1"
                        height="1"/>
            }
        </svg>;
    }
}

export default withTranslation()(SnakeGameComponent);