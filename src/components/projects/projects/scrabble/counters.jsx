import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters : [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 7},
            {id: 4, value: 0},
        ]
    };
    
    getCounter(counter) {
        return <div key={counter.id}><Counter id={counter.id} value={counter.value} onDelete={this.handleDelete}/></div>;
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters : counters});
    };

    addCounter = () => {
        let id = 0;
        const counters = this.state.counters;
        counters.push({id: id, value:0});
        this.setState({counters : counters});
    }

    render() {
        return (
        <React.Fragment>
        {this.state.counters.map(counter => this.getCounter(counter))}
        <button onClick={() => this.addCounter()}>ADD</button>
        </React.Fragment>
        );
    };

}

export default Counters;