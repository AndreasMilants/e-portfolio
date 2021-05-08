import React, { Component } from 'react';
import TileComponent from './tileComponent';

class LineComponent extends Component {
    render() {
        const style = {
            gridTemplateColumns: "repeat(" + this.props.tiles.length + ", 1fr)"
        };
        return (
            <div className="line" style={style}>
                {this.props.tiles.map(tile => this.getTileComponent(tile))}
            </div>
        );
    };

    getTileComponent = (tile) => {
        return <TileComponent key={tile.index} index={tile.index} changeLetter={this.changeLetter} getLetter={this.getLetter} getMultiplier={this.getMultiplier} />
    }

    changeLetter = (tileIndex, letter) => {
        this.props.changeLetter(this.props.index, tileIndex, letter);
    }

    getLetter = (tileIndex) => {
        return this.props.getLetter(this.props.index, tileIndex);
    }

    getMultiplier = (tileIndex) => {
        return this.props.getMultiplier(this.props.index, tileIndex);
    }
}

export default LineComponent;