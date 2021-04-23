import React from 'react';
import Form from './form';

const initValues = {
    name: '',
    email: '',
    password: '',
    gender: '',
    birthDate: ''
}

class MyApp extends React.Component {

    state = {
        values: initValues,
        agreement: false
    }

    handleChange = event => {
       this.setState({
           values: {
               ...this.state.values,
               [event.target.name]: event.target.value
           }
       }); 
    }

    handleCheckBox = event => {
        this.setState({
            agreement: event.target.checked
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.values, this.state.agreement);

        event.target.reset();
        this.setState({values: initValues, agreement: false});
    }

    render() {

        return (
            <div className='container'>
                <h1 className='text-center py-3'>Form Validation in React JS</h1><hr/>

                <Form
                    values = {this.state.values}
                    handleChange = {this.handleChange}
                    agreement = {this.state.agreement}
                    handleCheckBox = {this.handleCheckBox}
                    handleSubmit = {this.handleSubmit}
                />

            </div>
        );

    }

}

export default MyApp;