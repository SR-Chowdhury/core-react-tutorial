import React from 'react';

class MyApp extends React.Component {
    handleSubmit = event => {
        event.preventDefault();
        const data = {};
        data.name = event.target.name.value;
        data.email = event.target.email.value;
        data.password = event.target.password.value;
        console.log(data);
        event.target.reset();
    }
    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h1>Introducing Form (uncontrolled) in React</h1>
                    <hr/>
                    <input className="form-control mb-2" type="text" name="name" placeholder="Enter your name"/>
                    <input className="form-control mb-2" type="email" name="email" placeholder="Enter your Email"/>
                    <input className="form-control mb-2" type="password" name="password" placeholder="Enter your Password"/>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default MyApp;