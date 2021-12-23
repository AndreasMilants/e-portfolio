import {highestIndex} from "./math";

const {Point} = require("./math");

class SmellAndFeel {
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

    toOrientation(output, game) {
        let index = highestIndex(output);
        if (index === 2) index = 3;
        return (game.orientation + index) % 4;
    }
}

export {
    SmellAndFeel,
}