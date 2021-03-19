import React from 'react';
import './4.7_style.css'

class MyApp extends React.Component {

    render() {
        return (
            <div className="Container">
                <div className="Bio">
                    <h3>Shihanur Rahman Chowdhury</h3>
                    <p>Fullstack JS Developer</p>
                </div>
                <div className="Skills">
                    <h3>Skills: </h3>
                    <ul>
                        <li>Java</li>
                        <li>JS</li>
                        <li>ES6</li>
                    </ul>
                </div>
                <div className="Links">
                    <h3>Links: </h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twiter</a></li>
                        <li><a href="#">Github</a></li>
                        <li><a href="#">Linkedin</a></li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default MyApp;