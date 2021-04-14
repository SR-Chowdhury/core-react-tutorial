import React from 'react'

class MyApp extends React.Component {
    // In React Component properti/varibale can be defined by two ways
    // Method One React Version <16
    constructor(props) {
        super(props);
        this.count = 0;
    }

    // method two React Version >16
    countN = 1;


    render() {
        return (
            <div>
                <h2>Count = {this.count}</h2>
                <h1>New Count = {this.countN}</h1>
                <button onClick= { () => {
                    this.countN++;
                    console.log('Clicked......', this.countN);
                }}>
                    Add +1
                </button>
            </div>
        )
    }
}

export default MyApp;