import React from 'react';
import styles from './Header.module.css';

function Header() {
    console.log(styles);
    return (
        <header className={styles.header}>
            Header
        </header>
    );
}

export default Header;