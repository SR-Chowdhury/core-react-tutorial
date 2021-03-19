import React from 'react';

const CustomComponent = () => <h1>Alhamdulillah</h1>;

class MyApp extends React.Component {

    render() {

        const obj = {
            title: 'Rahman',
            id: 'pId'
        }

        const name = "Abdus Sabur";

        const test = (
            <div>
                <h1>Subhanallah</h1>
                <h2>{name}</h2>
                <p>Masha Allah</p>
            </div>
        );

        return (
            // <div className="App">
            //     <h1>Bismillahir Rahmanir Rahim</h1>
            //     <p>Allahu Akbar</p>
            // </div>

            // <React.Fragment>
            //     <h1>Bismillahir Rahmanir Rahim</h1>
            //     <p>Allahu Akbar</p>
            // </React.Fragment>
            // N.B. className is not valid in React.Fragment

            // Shorhand of React.Fragment; And it works only >16v

            <>
                <h1 {...obj}>Bismillahir Rahmanir Rahim</h1>
                <p>Allahu Akbar</p>
                <CustomComponent/>
                <p>{new Date().toISOString()}</p>
                <h3>Name: {name}</h3>
                {test}
            </>

        );

    }

}

export default MyApp;