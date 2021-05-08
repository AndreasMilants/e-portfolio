import React, {Component} from 'react';

class TileComponent extends Component {

    render() {
        return (
            <React.Fragment>
                <div className={this.getTileClasses()}>
                    <input type="text" value={this.getLetter()}
                           onChange={this.handleChange}/>
                </div>
            </React.Fragment>
        );
    };

    handleChange = (event) => {
        let n = event.target.value;
        if (n.length >= 1) {
            this.changeLetter(n[n.length - 1]);
        } else {
            this.changeLetter('');
        }
    }

    changeLetter(letter) {
        this.props.changeLetter(this.props.index, letter);
    }

    getLetter() {
        return this.props.getLetter(this.props.index);
    }

    getMultiplier() {
        return this.props.getMultiplier(this.props.index);
    }

    getTileClasses() {
        let multiplier = this.getMultiplier();
        let classes = "tile " + multiplier.type + multiplier.mul;
        classes += this.getLetter() === '' ? ' ' : ' filled ';
        return classes;
    };
}

export default TileComponent;