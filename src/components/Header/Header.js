import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { Button } from 'reactstrap';

const propTypes = {
    onSearch: PropTypes.func.isRequired
}

function Header(props) {
    const [findHotel, setFindHotel] = useState('');

    function search() {
        console.log('szukam ...', findHotel);
        props.onSearch(findHotel);
    }

    function updateHotelFound(e) {
        setFindHotel(e.target.value);
    }

    return (
        <header className={`${styles.header} container`}>
            <div className='d-flex'>
                <input
                    value={findHotel}
                    onKeyDown={e => e.key === 'Enter' && search()}
                    onChange={updateHotelFound}
                    className='form-control'
                    type='text'
                    placeholder='Search...' />
                <Button
                    color='secondary'
                    onClick={search}>
                    Search
                </Button>
            </div>
        </header>
    );
}

Header.propTypes = propTypes;

export default Header;