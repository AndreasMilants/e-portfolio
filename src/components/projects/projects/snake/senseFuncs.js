import {highestIndex} from "./math";

const {Point} = require("./math");

class BaseSenseClass {
    toOrientation(output, game) {
        let index = highestIndex(output);
        if (index === 2) index = 3;
        return (game.orientation + index) % 4;
    }
}

class SmellAndFeel extends BaseSenseClass {
    constructor() {
        super();
        this.inputSize = 6;
    }

    toInput(game) {
        let head = game.snake[game.snake.length - 1];
        let availability = [
            head.y > 0 && !game.pointIntersectsSnake(head.add(new Point(0, -1))),
            head.x < game.size - 1 && !game.pointIntersectsSnake(head.add(new Point(1, 0))),
            head.y < game.size - 1 && !game.pointIntersectsSnake(head.add(new Point(0, 1))),
            head.x > 0 && !game.pointIntersectsSnake(head.add(new Point(-1, 0))),
        ]

        let result;
        switch (game.orientation) {
            case 0:
                result = [
                    head.y < game.food.y,
                    head.x < game.food.x,
                    head.x > game.food.x,
                    availability[3],
                    availability[0],
                    availability[1],
                ]
                break;
            case 1:
                result = [
                    head.x < game.food.x,
                    head.y < game.food.y,
                    head.y > game.food.y,
                    availability[0],
                    availability[1],
                    availability[2],
                ]
                break;
            case 2:
                result = [
                    head.y > game.food.y,
                    head.x > game.food.x,
                    head.x > game.food.x,
                    availability[1],
                    availability[2],
                    availability[3],
                ]
                break;
            default:
                result = [
                    head.x > game.food.x,
                    head.y > game.food.y,
                    head.y < game.food.y,
                    availability[2],
                    availability[3],
                    availability[0],
                ]
        }

        return result.map(b => b ? 1 : 0);
    }
}

class Surrounding extends BaseSenseClass {
    constructor(radius) {
        super();
        if (!radius) {
            radius = 2;
        }
        this.radius = radius;

        this.inputSize = 3 + Math.pow((2*this.radius) + 1, 2);
    }

    toInput(game) {
        let head = game.snake[game.snake.length - 1];

        let m = [];
        for (let x = head.x - this.radius; x <= head.x + this.radius; x++) {
            let r = [];
            for (let y = head.y - this.radius; y <= head.y + this.radius; y++) {
                if (game.food.equals(new Point(x, y))) r.push(1);
                else if (x < 0 || y < 0 || x >= game.size || y >= game.size || game.pointIntersectsSnake(new Point(x, y))) r.push(-1);
                else r.push(0);
            }
            m.push(r);
        }

        function rotate(matrix) {
            return matrix[0].map((val, index) => matrix.map(row => row[index]).reverse());
        }

        switch (game.orientation) {
            case 1:
                m = rotate(m);
                break;
            case 2:
                m = rotate(rotate(m));
                break;
            case 3:
                m = rotate(rotate(rotate(m)));
                break;
        }

        // Add smell
        let result;
        switch (game.orientation) {
            case 0:
                result = [
                    head.y < game.food.y,
                    head.x < game.food.x,
                    head.x > game.food.x,
                ]
                break;
            case 1:
                result = [
                    head.x < game.food.x,
                    head.y < game.food.y,
                    head.y > game.food.y,
                ]
                break;
            case 2:
                result = [
                    head.y > game.food.y,
                    head.x > game.food.x,
                    head.x > game.food.x,
                ]
                break;
            default:
                result = [
                    head.x > game.food.x,
                    head.y > game.food.y,
                    head.y < game.food.y,
                ]
        }
        return [...result.map(r => r ? 1 : 0), ...m.flatMap(r => r)];
    }
}

export {
    SmellAndFeel,
    Surrounding,
}