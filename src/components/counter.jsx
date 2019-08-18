import React, { Component } from 'react';

class Counter extends Component {

    render() { 
        return (
            <React.Fragment>
                <span className="badge badge-secondary m-2 p-2">{this.formatCount()}</span>
                <button onClick={()=> this.props.onIncrement(this.props.counter)} className="btn btn-primary m-2">Increment</button>
                <button onClick={()=> this.props.onDecrement(this.props.counter)} className="btn btn-warning m-2">Decrement</button>
                <button onClick={()=> this.props.onDelete(this.props.counter)} className="btn btn-danger">Delete</button>
                <hr/>
            </React.Fragment>
          );
    }

    formatCount() {
        const {count } = this.props.counter;
        return count===0 ? 'Zero' : count
    }

}
 
export default Counter;
