import React from 'react';
import BoxA from './boxA';
import BoxB from './boxB';
import Button from './button';
import './6.4_style.css';

class MyApp extends React.Component {
    render() {
        return (
            <div className='container'>
                <Button>Click Me</Button>
                <BoxA/>
                <BoxB/>
            </div>
        )
    }
}

export default MyApp;

/**
 * Here scoping is not possible thats why className good solution but not better solution
 */