import React from 'react';
import Form from './form';

const initValus = {
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: ''
}
class MyApp extends React.Component {

    state = {
        values : initValus,
        agreement: false
    }

    handleChange = event => {
        this.setState ({
            values : {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
        });
    }

    handleCheckbox = event => {
        this.setState({
            agreement: event.target.checked
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);

        event.target.reset();
        this.setState({values: initValus, agreement: false});
    }

    render() {

        return (
            <div className="container py-5">
                <h1 className="text-center mb-4">Sign up From in React JS</h1><hr/>
                <Form
                    values={this.state.values}
                    agreement={this.state.agreement}
                    handleChange={this.handleChange}
                    handleCheckbox={this.handleCheckbox}
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