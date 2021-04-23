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
        agreement: false,
        errors: {}
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

    validateForm = () => {

        const errors = {};
        const {values: {name,email,password,birthDate,gender}} = this.state;
        
        if(!name) {
            errors.name = 'Please Enter Name';
        } else if (name.length < 5 ) {
            errors.name = 'Name length should be more than 5 letters';
        } else if (name.length > 35 ) {
            errors.name = 'Name length should not be more than 35 letters';
        }
        if(!email) {errors.email = 'Please Enter email';}
        if(!password) {errors.password = 'Please Enter password';}
        if(!birthDate) {errors.birthDate = 'Please Select Birthdate';}
        if(!gender) {errors.gender = 'Please Select Gender';}

        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const {errors, isValid} = this.validateForm();

        if(isValid) {
            console.log(this.state.values, this.state.agreement);

            event.target.reset();
            this.setState({ values: initValues, agreement: false, errors: {} });
        } 
        else {
            this.setState({ errors });
        }

    }

    render() {

        return (
            <div className='container'>
                <h1 className='text-center py-3'>Form Validation in React JS</h1><hr/>

                <Form
                    values = {this.state.values}
                    handleChange = {this.handleChange}
                    agreement = {this.state.agreement}
                    errors = {this.state.errors}
                    handleCheckBox = {this.handleCheckBox}                    
                    handleSubmit = {this.handleSubmit}
                />

            </div>
        );

    }

}

export default MyApp;