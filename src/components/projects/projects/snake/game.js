import {Point, randomIntFromInterval} from "./math";

const North = 0;
const East = 1;
const South = 2;
const West = 3;


class Game {
    constructor(size) {
        this.size = size;
        this.snake = [new Point(Math.floor((size - 1) / 2), Math.floor((size - 1) / 2))];
        this.orientation = randomIntFromInterval(0, 3);
        this.food = null;
        this.newFood();
        this.points = 0;

        this.gameOver = false;
    }

    pointIntersectsSnake(point) {
        return this.snake.some(p => p.equals(point));
    }

    newFood() {
        let x = randomIntFromInterval(0, this.size - 1);
        let y = randomIntFromInterval(0, this.size - 1);
        while (this.pointIntersectsSnake(new Point(x, y))) {
            x = randomIntFromInterval(0, this.size - 1);
            y = randomIntFromInterval(0, this.size - 1);
        }
        this.food = new Point(x, y);
    }

    facingInDirectionOfFood() {
        let head = this.snake[this.snake.length - 1];
        switch (this.orientation) {
            case North:
                return head.y > this.food.y;
            case East:
                return head.x < this.food.x;
            case South:
                return head.y < this.food.y;
            case West:
                return head.x > this.food.x;
        }
    }

    tick() {
        if (!this.gameOver) {
            let head = this.snake[this.snake.length - 1];
            let nextHead = null;
            switch (this.orientation) {
                case North:
                    nextHead = head.add(new Point(0, -1));
                    break;
                case East:
                    nextHead = head.add(new Point(1, 0));
                    break;
                case South:
                    nextHead = head.add(new Point(0, 1));
                    break;
                default:
                    nextHead = head.add(new Point(-1, 0));
            }
            if (this.pointIntersectsSnake(nextHead) || !nextHead.inBounds(0, this.size)) {
                this.gameOver = true;
                return;
            }
            if (this.food.equals(nextHead)) {
                this.snake = [...this.snake, nextHead];
                this.points++;
                this.newFood();
                return true;  // Return true if we found food
            } else {
                this.snake.shift();
                this.snake = [...this.snake, nextHead];
                return false;
            }
        }
    }
}

export default Game;