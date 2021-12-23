import {addVectors, multiplyInputWeights, randomFloatFromInterval, sigmoid} from "./math";

class Network {
    constructor(layers, weights, biases) {
        if (!weights) {  // this is a new network
            weights = [];  // Will be an array of matrices
            biases = [];  // Will be an array of arrays
            for (let i = 0; i < layers.length - 1; i++) {
                let input = layers[i];
                let output = layers[i + 1];

                weights.push([...Array(output)].map(_ => [...Array(input)].map(_ => Math.random())));
                biases.push([...Array(output)].map(_ => Math.random()));
            }
        }

        this.layers = layers;
        this.weights = weights;
        this.biases = biases;
    }

    inputToOutput(input) {
        return this.weights.reduce((layerIn, w, i) => addVectors(multiplyInputWeights(layerIn, w), this.biases[i]), input);
    }

    mutate(percentage) {
        if (percentage === 0) return this;

        let weights = this.weights.map(matrix => matrix.map(row => row.map(el => randomFloatFromInterval(el * (1 - percentage), el * (1 + percentage)))));
        let biases = this.biases.map(vector => vector.map(el => randomFloatFromInterval(el * (1 - percentage), el * (1 + percentage))));
        return new Network(this.layers, weights, biases);
    }

}

export default Network;