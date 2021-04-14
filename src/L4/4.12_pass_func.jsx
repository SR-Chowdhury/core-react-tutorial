import React from 'react';

class Child extends React.Component {

    render() {

        this.props.func();

        return <h1>I am Child</h1>

    }

}

class MyApp extends React.Component {

    getContext = () => console.log("I am a function");

    render() {

        this.getContext();

        return (
            <div>
                <h1>I am Parent.</h1>
                <Child func={this.getContext}/>
            </div>
        )

    }

}



export default MyApp;