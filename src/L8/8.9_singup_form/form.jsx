import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './text-input';

const Form = props => {

    return(

        <form onSubmit={props.handleSubmit}>
            <TextInput 
                className="form-control mb-3"
                label="Enter Name"
                name="name"
                value={props.values.name}
                placeholder="Enter your name"
                onChange={props.handleChange}
            />
            <TextInput 
                className="form-control mb-3"
                label="Enter Email"
                type="email"
                name="email"
                value={props.values.email}
                placeholder="Enter your email"
                onChange={props.handleChange}
            />
            <TextInput 
                className="form-control mb-3"
                label="Enter Password"
                type="password"
                name="password"
                value={props.values.password}
                placeholder="Enter your password"
                onChange={props.handleChange}
            /> <br/>

            <button className="btn btn-info">Submit</button>
        </form>

    );
}

Form.propTypes = {
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Form;