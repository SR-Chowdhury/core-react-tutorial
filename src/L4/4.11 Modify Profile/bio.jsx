import React from 'react';

class Bio extends React.Component {

    render () {

        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.title}</p>
            </div>
        );

    }

}

export default Bio;