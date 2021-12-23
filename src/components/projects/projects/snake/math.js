function multiplyInputWeights(input, weights) {
    return weights.map(row => row.reduce((acc, val, i) => acc + input[i] * val), 0);
}

function addVectors(v1, v2) {
    return v1.map((v, i) => v + v2[i]);
}

function randomIntFromInterval(min, max) {  // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomFloatFromInterval(min, max) {
    return Math.random() * (max - min + 1) + min
}

function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

function highestIndex(array) {
    return array.reduce((acc, val, i) => val > acc[0] ? [val, i] : acc, [0, 0])[1];
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    equals(point) {
        return point.x === this.x && point.y === this.y;
    }

    add(point) {
        return new Point(point.x + this.x, point.y + this.y);
    }

    inBounds(xMin, xMax, yMin, yMax) {  // if == max, returns false
        if (!yMin && !yMax) {
            yMin = xMin;
            yMax = xMax;
        }
        return this.x >= xMin && this.x < xMax && this.y >= yMin && this.y < yMax;
    }
}

export {
    multiplyInputWeights,
    addVectors,
    randomIntFromInterval,
    randomFloatFromInterval,
    sigmoid,
    highestIndex,
    Point,
}