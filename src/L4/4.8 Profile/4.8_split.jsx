import React from 'react';
import '../4.7_style.css'
import Bio from './4.8_bio'
import Skills from './4.8_skills'
import Links from './4.8_links'

class MyApp extends React.Component {

    render() {
        return (
            <div className="Container">
                <Bio/>
                <Skills/>
                <Links/>
            </div>
        );
    }

}

export default MyApp;