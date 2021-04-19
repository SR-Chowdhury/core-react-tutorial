import React from 'react';

class MyApp extends React.Component {

    state ={
        name: '',
        country: '',
        bio: '',
        birthday: '',
        gender: '',
        agree: false,
        skills: []
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleCheckbox = event => {
        this.setState({agree: event.target.checked});
    }
    handleSkills = event => {
        if(event.target.checked) {
            this.setState({
                skills: [...this.state.skills, event.target.value] 
            });            
        } 
        else {
            const skills = this.state.skills.filter(skill => skill !== event.target.value)
            this.setState({skills});
        }
    }

    render() {
        const {name, country, birthday, bio, agree, skills} = this.state;
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
                
                <div className='mb-2'>
                    <input className="mr-2" type="radio" onChange={this.changeHandler} name='gender' value="Male"/> Male
                    <input className="m-2" type="radio" onChange={this.changeHandler} name='gender' value="Female"/> Female
                    <input className="m-2" type="radio" onChange={this.changeHandler} name='gender' value="Other"/> Other
                </div>
                <input onChange={this.handleCheckbox} type="checkbox" checked={agree} name="agree"/>&nbsp; I agree the all terms and conditions. <br/><br/>

                <div>
                    <h4>Skills</h4><br/>
                    <input type="checkbox" name="skills" value="Java" checked={skills.includes("Java")} onChange={this.handleSkills}/> Java
                    <input type="checkbox" name="skills" value='JS' checked={skills.includes('JS')} onChange={this.handleSkills}/> JS
                    <input type="checkbox" name="skills" value='HTML' checked={skills.includes('HTML')} onChange={this.handleSkills}/> HTML
                    <input type="checkbox" name="skills" value='JSS' checked={skills.includes('JSS')} onChange={this.handleSkills}/> JSS
                </div>


                <br/>
                <button onClick ={() => console.log(this.state) }>Show data on Console</button>
                
            </div>
        )
    }
}

export default MyApp;