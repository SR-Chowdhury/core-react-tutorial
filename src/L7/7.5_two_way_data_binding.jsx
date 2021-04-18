import React from 'react';

class MyApp extends React.Component {
    state = {
        name: ''
    }
    changeHandler = event => {
        this.setState({name: event.target.value});
    }

    render() {
        return(
            <div>
                <input value={this.state.name} onChange={this.changeHandler} type="text" placeholder="Enter Your Text"/>

                <br/><br/>
                
                {this.state.name && <h3>Welcome, {this.state.name}</h3>}

            </div>
        )
    }
}

export default MyApp;