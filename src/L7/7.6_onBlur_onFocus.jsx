import React from 'react';

class MyApp extends React.Component {
    state = {
        name: ''
    }
    changeHandler = event => {
        this.setState({name: event.target.value});
    }
    focusHandler = event => {
        console.log('I am focused');
    }
    blurHandler = event => {
        if (!this.state.name) {
            alert('Please enter something');
        }
        console.log('I am blur');
    }

    render() {
        return (
            <div>
                <input value={this.state.name}
                onChange = {this.changeHandler}
                onFocus = {this.focusHandler}
                onBlur = {this.blurHandler}  
                type="text" placeholder="Enter your text"/>

                <br/>
                {this.state.name && <h3>Welcome, {this.state.name}</h3>}
            </div>
        )
    }
}

export default MyApp;