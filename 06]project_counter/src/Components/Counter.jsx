import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super();
        this.state = {count:0};
    }
    decrement = () => {
        this.setState({count:this.state.count-1})
    }
    reset = () => {
        this.setState({count:this.state.count=0})
    }
    increment = () => {
        this.setState({count:this.state.count+1})
    }
    render() {
        return (
        <>
        <div className='container'>
            <h1>Counter</h1>
            <h2>{this.state.count}</h2>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.reset}>Reset</button>
            <button onClick={this.increment}>+</button>
        </div>
        </>
        )
    }
}
