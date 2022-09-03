import React from 'react';
import Hotel from './Hotel/Hotel';
import styles from './Hotels.module.css';

function Hotels() {
   
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Explore our offers</h2>
            <Hotel />
            <Hotel />
            <Hotel />
        </div>
    )
}

export default Hotels;