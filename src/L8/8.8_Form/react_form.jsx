import React from 'react';
import PropTypes from 'prop-types';

// functional Component must have return() or component = props => ();
const TextInput = props => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input 
            className='form-control'
            type={props.type}
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />        
    </div>
);

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

TextInput.defaultProps = {
    type: 'text',
    label: '',
    placeholder: ''
}

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
        const {name, email, password} = this.state
        return (
            <div className="Container p-5">
                <h1>Form in React JS</h1>

                <form onSubmit={this.handleSubmit}>
                    <TextInput
                        name='name'
                        label='Enter name'
                        placeholder = 'Enter your name'
                        value={name}
                        onChange={this.handleChange}
                    />
                    <TextInput
                        name='email'
                        type='email'
                        label='Enter Email'
                        placeholder = 'example@gmail.com'
                        value={email}
                        onChange={this.handleChange}
                    />
                    <TextInput
                        name='password'
                        type='password'
                        label='Enter password'
                        placeholder = '******'
                        value={password}
                        onChange={this.handleChange}
                    />
                    <br/>

                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default MyApp;