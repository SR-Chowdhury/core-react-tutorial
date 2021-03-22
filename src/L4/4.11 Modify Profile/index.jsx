import React from 'react';
import Bio from './bio';
import Skills from './skills';

class MyApp extends React.Component {

    bio = {
        name: 'Shihan',
        title: 'Fullstack Web Developer'
    }
    Skills = {
        skillsA : 'JS',
        skillsB : 'React JS',
        skillsC : 'OOJS'
    }

    render() {

        return (
            <>
                <Bio name={this.bio.name} title={this.bio.title}/>
                <Skills skillsA = {this.Skills.skillsA} skillsB = {this.Skills.skillsB} skillsC = {this.Skills.skillsC}/>
            </>    
        );

    }

}

export default MyApp;