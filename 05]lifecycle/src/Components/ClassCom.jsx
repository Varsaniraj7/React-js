import React, { Component } from 'react'

export default class ClassCom extends Component {
    constructor(){
        super();
        this.state = {count : 0, name : "raj"}
    }
    increment = ()=>{
        this.setState({count:this.state.count + 1})
    }
    decrement = ()=>{
        this.setState({count:this.state.count - 1})
    }
    componentDidMount(){
        console.log("Mounting");
    }
    componentDidUpdate(){
        console.log("Updating");
    }
    // componentWillUnmount(){

    // }
    render() {
        return (
        <div>
            <h1>ClassCom</h1>
            <h2>{this.state.count} {this.state.name}</h2>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
        </div>
        )
    }
}
