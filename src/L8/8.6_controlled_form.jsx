import React from 'react';

class MyApp extends React.Component {
    state = {
        name: '',
        email: '',
        password: ''
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        event.target.reset();
        this.setState({name: '', email: '', password: ''});
    }
    render() {
        const {name, email, password} = this.state;
        return (
            <div className="Container p-5">
                <h1>Controlled Form in React JS</h1>

                <form onSubmit={this.handleSubmit}>
                    <input 
                        className="form-control mb-3" 
                        value={name} 
                        onChange={this.handleChange} 
                        type="text" 
                        name="name" 
                        placeholder="Enter your name"/>
                    <input 
                        className="form-control mb-3" 
                        value={email} 
                        onChange={this.handleChange} 
                        type="email" 
                        name="email" 
                        placeholder="Enter your email"/>
                    <input 
                        className="form-control" 
                        value={password} 
                        onChange={this.handleChange} 
                        type="password" 
                        name="password" placeholder="*******"/>
                    <br/>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default MyApp;