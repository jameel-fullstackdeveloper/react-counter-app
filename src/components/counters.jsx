import React, { Component } from 'react';
import Counter from './counter'


class Counters extends Component {
    state = { 
        counters: [
            {id:1, name:"First Counter" , count:1},
            {id:2, name:"Second Counter" ,count:2},
            {id:3, name:"Third Counter" ,count:3}
            ]
    }

    handleIncrement = (e) => {
        const counters = [...this.state.counters]
        const index = counters.indexOf(e)
        counters[index] = {...e}
        counters[index].count++
        this.setState({
            counters
        })
    }

    handleDecrement = (e) => {
        const counters = [...this.state.counters]
        const index = counters.indexOf(e)
        counters[index] = {...e}
        counters[index].count--
        this.setState({
            counters
        })
    }


    handleDelete = (e) => {
        const counters = this.state.counters.filter(counter => counter.id !== e.id)
        this.setState( {
            counters       
        })
    }

    handleReset = (e) => {
        const counters = this.state.counters.map(counter => {
                counter.count=0
                return counter
            })

        this.setState( {
            counters       
        })
    }


    render() { 
        return (
            <React.Fragment>
                <p>&nbsp;</p>
                {this.state.counters.map( counter => 
                    <Counter key={counter.id} 
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    counter={counter}
                    />
                )}

            <button className="btn btn-primary"  onClick={this.handleReset}>Rest All Counters</button>

            </React.Fragment>
          );
    }
}
 
export default Counters;