import React from 'react'

class MyApp extends React.Component {

    // method two React Version >16
    state = {
        countN : 0
    }

    render() {
        return (
            <div>
                <h1>New Count = {this.state.countN}</h1>
                <button onClick= { () => {
                    this.setState({countN: this.state.countN + 1})
                    console.log('Clicked......', this.state.countN);
                }}>
                    Add +1
                </button>
            </div>
        )
    }
}

export default MyApp;