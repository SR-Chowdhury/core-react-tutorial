import React from 'react';
import PropTypes from 'prop-types';

const TextInput = props => {

    return (
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <input 
                className = { props.error ? 'form-control is-invalid mb-3' : 'form-control mb-3' }
                type = {props.type}
                name = {props.name}
                value = {props.value}
                placeholder = {props.placeholder}
                onChange = {props.onChange}
            />
            {props.error && <div className='invalid-feedback'>{props.error}</div>}
        </div>
    );
}

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

TextInput.defaultProps = {
    type : 'text',
    label: '',
    placeholder: ''
}

export default TextInput;