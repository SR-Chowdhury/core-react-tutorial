import React from 'react';
import Bio from './4.8 Profile/4.8_bio';

class MyApp extends React.Component {

    render() {

        return (
            <div className="Container">
                <Bio />
                <h5>Here we reuse React Component</h5>
            </div>
        );

    }

}

export default MyApp;