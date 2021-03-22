import React from 'react';

class Skills extends React.Component {

    render () {

        return (
            <div>
                <h3>Skills</h3>
                <ul>
                    <li>{this.props.skillsA}</li>
                    <li>{this.props.skillsB}</li>
                    <li>{this.props.skillsC}</li>
                </ul>
            </div>
        );

    }

}

export default Skills;