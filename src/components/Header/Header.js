import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
// import { Button } from 'reactstrap';
import ThemeContext from '../context/themeContext';
import mousePosition from '../hoc/mousePosition';

const propTypes = {
    onSearch: PropTypes.func.isRequired
}


function Header(props) {
    const [findHotel, setFindHotel] = useState('');
    const theme = useContext(ThemeContext);

    useEffect(() => {
        document.querySelector('.search').focus();
    }, []);


    function search() {
        console.log('szukam ...', findHotel);
        props.onSearch(findHotel);
    }

    function updateHotelFound(e) {
        setFindHotel(e.target.value);
    }

    return (
        <header className={`${styles.header}`}>
            {/* {props.mouseX}
            {props.mouseY} */}
            <div className='d-flex'>
                <input
                    value={findHotel}
                    onKeyDown={e => e.key === 'Enter' && search()}
                    onChange={updateHotelFound}
                    className='form-control search'
                    type='text'
                    placeholder='Search...' />

                {/* <Button
                    color={theme.color}
                    onClick={search}>
                    Search
                </Button> */}
                <button onClick={search} className={`ml-1 btn btn-${theme}`}>Search</button>

            </div>
        </header>
    );
}

Header.propTypes = propTypes;

export default mousePosition(Header);