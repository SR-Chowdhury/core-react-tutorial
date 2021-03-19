import React from 'react';

class MyApp extends React.Component {
    render() {
        return (
            // <div className ="App">
            //     <h1>Bismillahir Rahmanir Rahim</h1>
            //     <p>Allahu Akbar</p>
            // </div>
            
            // Both code work same. Upper one look like HTML format but behind the scene it is JS

            React.createElement('div', {className: 'App'}, 
                React.createElement('h1', null, 'Bismillahir Rahmanir Rahim'),
                React.createElement('p', null, 'Allahur Akbar')
            )
        );
    }
}

export default MyApp;