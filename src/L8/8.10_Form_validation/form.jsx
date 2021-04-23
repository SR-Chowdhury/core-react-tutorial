import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './text-input';

const Form = props => {

    return (
        <div className='col-lg-6 offset-lg-3'>

            <form onSubmit = {props.handleSubmit}>

                <TextInput
                    label = 'Enter Name'
                    name = 'name'
                    value = {props.values.name}
                    placeholder = 'Enter you name'
                    onChange = {props.handleChange}
                />                    
                <TextInput
                    label = 'Enter email'
                    type = 'email'
                    name = 'email'
                    value = {props.values.email}
                    placeholder = 'Enter you email'
                    onChange = {props.handleChange}
                />                        
                <TextInput
                    label = 'Enter password'
                    type = 'password'
                    name = 'password'
                    value = {props.values.password}
                    placeholder = '*************'
                    onChange = {props.handleChange}
                />                       
                <TextInput
                    label = 'Slelect Birthdate'
                    type = 'date'
                    name = 'birthDate'
                    value = {props.values.birthDate}
                    onChange = {props.handleChange}
                /> 
                <div className='form-group'>
                    <label className='mr-3'>
                        <input 
                            type="radio"
                            name = 'gender'
                            value = 'male'
                            onChange = {props.handleChange}
                        /><span className='pl-2'>Male</span> 
                    </label> 
                    <label className='mr-3'>
                        <input 
                            type="radio"
                            name = 'gender'
                            value = 'female'
                            onChange = {props.handleChange}
                        /><span className='pl-2'>Female</span> 
                    </label> 
                    <label className='mr-3'>
                        <input 
                            type="radio"
                            name = 'gender'
                            value = 'other'
                            onChange = {props.handleChange}
                        /><span className='pl-2'>Other</span> 
                    </label> 
                </div> 
                <div className="form-group">
                    <input 
                        type="checkbox"
                        name = 'agreement'
                        checked = {props.agreement}
                        onChange = {props.handleCheckBox}
                    /> I agree all the terms and conditions.   
                </div> <br/>

                <button className='btn btn-success' disabled = {!props.agreement}>Sign Up</button> 

            </form>

        </div>
    );

}

Form.propTypes = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleCheckBox: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Form;