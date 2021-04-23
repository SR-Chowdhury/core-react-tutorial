import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './text-input';

const Form = props => {

    return(
        <div className='col-lg-6 offset-lg-3'>
            <form onSubmit={props.handleSubmit}>
                <TextInput 
                    label="Enter Name"
                    name="name"
                    value={props.values.name}
                    placeholder="Enter your name"
                    onChange={props.handleChange}
                />
                <TextInput 
                    label="Enter Email"
                    type="email"
                    name="email"
                    value={props.values.email}
                    placeholder="Enter your email"
                    onChange={props.handleChange}
                />
                <TextInput 
                    label="Enter Password"
                    type="password"
                    name="password"
                    value={props.values.password}
                    placeholder="Enter your password"
                    onChange={props.handleChange}
                /> 
                <TextInput 
                    label="Enter Birthdate"
                    type="date"
                    name="birthDate"
                    value={props.values.birthDate}
                    placeholder="Enter your Birth Date"
                    onChange={props.handleChange}
                />
                <div className="form-group">
                    <label className='mr-2'>
                        <input type="radio" value='male' name = 'gender' onChange={props.handleChange}/> Male
                    </label>
                    <label className='mr-2'>
                        <input type="radio" value='female' name = 'gender' onChange={props.handleChange}/> Female
                    </label>
                    <label className='mr-2'>
                        <input type="radio" value='other' name = 'gender' onChange={props.handleChange}/> Other
                    </label>
                </div> 
                <div>
                    <label>
                        <input type="checkbox" name='agreement' onChange={props.handleCheckbox} checked={props.agreement}/> I agree all the terms and conditions
                    </label>
                </div>

                <button className="btn btn-info" disabled={!props.agreement}>Sign Up</button>
            </form>
        </div>


    );
}

Form.propTypes = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleCheckbox: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default Form;