import React, { useContext } from "react";
import styles from './Menu.module.css';
import AuthContext from "../context/authContext";

function Menu() {
    const auth = useContext(AuthContext);

    return (
        <div className={styles.menuContainer}>
            <ul className={styles.menu}>
                <li className={`${styles.menuItem}`}>
                    <a href='#Home'>Home</a><span > </span>
                </li>
                <li className={`${styles.menuItem}`}>
                    {auth.isAuthenticated ? <button onClick={auth.logout} className="btn text-center">Log out</button>
                        : <button onClick={auth.login} className="btn text-center">Log in</button>}
                </li>
            </ul>
        </div>
    )
}

export default Menu;