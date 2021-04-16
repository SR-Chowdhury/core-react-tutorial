import React from 'react';
import ComA from './componentA';
import './styles.css';
import styles from './Another-styles.module.css';

class MyApp extends React.Component {
    render() {
        return (
            <div>
                <h1 className={styles.headR}>Bismillahir Rahmanir Rahim</h1>
                <h1>Alhamdulillah</h1>
                <ComA/>

            </div>
        )
    }
}

export default MyApp;