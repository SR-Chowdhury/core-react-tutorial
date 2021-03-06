import React from 'react';
import PropTypes from 'prop-types';

const TextInput = props => {
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input 
                className="form-control mb-3"
                type={props.type}
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
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
}

TextInput.defaultProps = {
    label: '',
    type: 'text',
}

export default TextInput;

