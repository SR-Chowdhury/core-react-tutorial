import React from 'react';

class MyApp extends React.Component {

    render() {

        return (
            <div>
                <h1>I am from Parent</h1>
                <ChildComponent>
                    <h2>Horra!</h2>
                    <h3>hello, I am from Child Component</h3>
                </ChildComponent>
            </div>
        )

    }

}
const ChildComponent = props => (
    <div>
        <h1>I am Child</h1>
        {props.children}
    </div>
)
export default MyApp;