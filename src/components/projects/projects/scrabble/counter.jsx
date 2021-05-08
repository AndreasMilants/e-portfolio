import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
        tags: [1, 2, 3]
    };

    render() {
        return (
            <React.Fragment>
                <div className={this.getBadgeClasses()}>{this.formatCount()}</div>
                <button onClick={() => this.incrementX(2)} className="button">+</button>
                <button onClick={() => this.incrementX(-2)} className="button">-</button>
                <button onClick={() => this.props.onDelete(this.props.id)} className="button">DELETE</button>
            </React.Fragment>
        );
    };

    incrementX = (x) => {
        this.setState({value : this.state.value + x});
    };

    getBadgeClasses() {
        let classes = "badge ";
        classes += this.state.value === 0 ? "zero" : "";
        return classes;
    };

    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    };
}

export default Counter;