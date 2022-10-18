// import React, { useContext } from "react";
import styles from './Menu.module.css';
// import AuthContext from "../context/authContext";
import useAuth from "../hooks/useAuth";
import { NavLink } from 'react-router-dom';

function Menu() {
    // const auth = useContext(AuthContext);
    const [auth, setAuth] = useAuth();

    const login = (e) => {
        e.preventDefault();
        setAuth(true);
    }

    const logout = (e) => {
        e.preventDefault();
        setAuth(false);
    }

    return (
        <div className={`${styles.menuContainer} breadcrumb`} >
            <ul className={styles.menu}>
                <li className={styles.menuItem}>
                    {/* <a href='#Home'>Home</a><span > </span> */}
                    <NavLink to='/' className="btn text-center">Home</NavLink>
                </li>
                <li className={styles.menuItem}>
                    {/* {auth.isAuthenticated ? <button onClick={auth.logout} className="btn text-center">Log out</button>
                        : <button onClick={auth.login} className="btn text-center">Log in</button>} */}
                    {auth ?
                        <>
                            <NavLink to='/profile' className={styles.menuItemActive}>Profile</NavLink>
                            <button onClick={logout} className="btn text-center">Log out</button>
                        </>

                        :
                        <>
                            <NavLink to="/register" className="btn text-center">Register</NavLink>
                            <button onClick={login} className="btn text-center">Log in</button>
                        </>
                    }
                </li>
            </ul>
        </div>
    )
}

export default Menu;