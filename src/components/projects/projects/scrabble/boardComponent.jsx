import React, { Component } from 'react';
import LineComponent from './lineComponent'

class BoardComponent extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.state.lines.map(line => this.getLineComponent(line))}
            </React.Fragment>
        );
    };
    
    getLineComponent = (line) => {
        return <LineComponent key={line.index} tiles={line.tiles} index={line.index} getLetter={this.getLetter} getMultiplier={this.getMultiplier} changeLetter={this.changeLetter} />
    }

    changeLetter = (lineIndex, tileIndex, letter) => {
        this.props.changeLetter(lineIndex, tileIndex, letter);
    }

    getLetter = (lineIndex, tileIndex) => {
        return this.props.getLetter(lineIndex, tileIndex);
    }

    getMultiplier = (lineIndex, tileIndex) => {
        return this.props.getMultiplier(lineIndex, tileIndex);
    }
}

export default BoardComponent;