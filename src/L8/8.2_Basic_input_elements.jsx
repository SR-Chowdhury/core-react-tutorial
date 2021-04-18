import React from 'react';

class MyApp extends React.Component {

    state ={
        name: '',
        country: '',
        bio: '',
        birthday: ''
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const {name, country, birthday, bio} = this.state;
        return (
            <div className='p-5'>
                <h1 className='text-center'>Bismillahir Rahmanir Rahim</h1><hr/>

                <input className='form-control mb-2 col-6' onChange={this.changeHandler} 
                value = {name} type="text" name='name' placeholder="Enter your name"/>
                <select className='form-control mb-2 col-6' onChange={this.changeHandler} value = {country} name="country">
                    <option>--Select Country--</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="UK">UK</option>
                    <option value="USA">USA</option>
                </select>
                <input className='form-control col-6 mb-2' onChange={this.changeHandler} value = {birthday} type="date" name='birthday'/>
                <textarea className='form-control' onChange={this.changeHandler} 
                value = {bio} name="bio" placeholder='Tell me something..'></textarea>
                <br/>
                <button onClick ={() => console.log(this.state) }>Show date on Console</button>
                
            </div>
        )
    }
}

export default MyApp;