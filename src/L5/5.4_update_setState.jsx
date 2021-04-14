import React from 'react'

class MyApp extends React.Component {

    // method two React Version >16
    state = {
        count : 0,
        lotOfThings: {}
    }

    render() {
        return (
            <div>
                <h1>New Count = {this.state.count}</h1>
                <button onClick= { () => {
                    this.setState( 
                        args => {
                            return {
                                count: args.count + 1
                            }
                        },
                        () => {
                            console.log('Clicked......', this.state.count);
                        } // Since setState function is asynchronous, thats why we used call back function
                    )                    
                }}>
                    Add +1
                </button>
            </div>
        )
    }
}

export default MyApp;