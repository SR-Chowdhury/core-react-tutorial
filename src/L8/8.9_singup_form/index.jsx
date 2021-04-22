import React from 'react';
import Form from './form';

class MyApp extends React.Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    handleChange = event => {
        this.setState ({
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

        return (
            <div className="container py-5">
                <h1 className="text-center mb-4">Sign up From in React JS</h1>
                <Form
                    values={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default MyApp;

/**
 * Uncontrolled form done
 * Controlled form done
 * Split form done
 * Split form with component done
 */