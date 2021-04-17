import React from 'react';
import styles from './style.module.css';

class MyApp extends React.Component {
    handleListener = (event) => {
        console.log(event.target);
    }
    render() {
        return (
            <div className={styles.Wrapper}>
                <h1 className={styles.h1Tag}>Bismillahir Rahmanir Rahim</h1>
                <button className={styles.btn} onClick={this.handleListener}>Click Me</button>
            </div>
        )
    }
}

export default MyApp;