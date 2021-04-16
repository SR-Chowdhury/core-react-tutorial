import React from 'react';

const myH1 = {
    color: 'blue',
    fontWeight: 400
}
const myH2 = {
    color: 'yellow'
}

class MyApp extends React.Component {
    render() {
        return (
            <div>
                <h1 style={myH1}>Bismillahir Rahmanir Rahim</h1>
                <h1 style={
                    {   
                        color: 'green',
                        fontWeight: 400
                    }
                }>Alhamdulillah</h1>
                <h2 style={myH2}>Inline CSS in React Apps</h2>
            </div>
        )
    }
}

export default MyApp;