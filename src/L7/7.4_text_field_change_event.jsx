import React from 'react';

class MyApp extends React.Component {

    handleChange = event => {
        console.log(event.target.value);
    };

    render() {
        return (
            <div>
                <input onChange={this.handleChange} type="text" placeholder="Enter Your Text"/>
            </div>
        )
    }
}
export default MyApp;