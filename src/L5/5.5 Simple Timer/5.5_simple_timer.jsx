import React from 'react';
import './style.css'

class MyApp extends React.Component {

    state = {
        count: 0
    }
    intervalId = null;

    decrementCount = () => {
        if(this.state.count >0) {
            this.setState({ count: this.state.count - 1});
        }
    }
    incrementCount = () => this.setState({ count: this.state.count + 1})

    startTimer = () => {
        if(this.state.count>0) {
            this.intervalId = setInterval( () => {
                this.setState({count: this.state.count - 1}, () => {
                    if(this.state.count === 0) {
                        clearInterval(this.intervalId);
                        this.intervalId = null;
                    }
                })
            }, 1000)
        }
    }

    pauseTimer = () => {
        if(this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    resetTimer = () => {
        if(this.state.count > 0 & !this.intervalId) {
            this.setState({count : 0});
        } 
    }

    render() {
        return (
            <div>
                <h1>Simple Timer Using React JS</h1>
                <button onClick={this.decrementCount} className="btn btn-default"> <strong>-</strong></button>
                <span>{this.state.count}</span>
                <button className="btn btn-default" onClick={this.incrementCount}> <strong>+</strong> </button>

                <div>
                    <button className="btn btn-success" onClick = {this.startTimer} >Start</button>
                    <button className="btn btn-warning" onClick = {this.pauseTimer} >Pause</button>
                    <button className="btn btn-danger" onClick = {this.resetTimer} >Reset</button>
                </div>
            </div> 
        )
    }
}

export default MyApp;