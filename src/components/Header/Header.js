import React from 'react';
import styles from './Header.module.css';
import { Button } from 'reactstrap';

function Header() {

    return (
        <header className={`${styles.header} container`}>
            <div className='d-flex'>
                <input className='form-control' type='text' placeholder='Search...' />
                <Button color='secondary'>Search</Button>
            </div>
        </header>
    );
}

export default Header;