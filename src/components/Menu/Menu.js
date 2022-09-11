// import React, { useContext } from "react";
import styles from './Menu.module.css';
// import AuthContext from "../context/authContext";
import useAuth from "../hooks/useAuth";

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
        <div className={styles.menuContainer}>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>
                    <a href='#Home'>Home</a><span > </span>
                </li>
                <li className={styles.menuItem}>
                    {/* {auth.isAuthenticated ? <button onClick={auth.logout} className="btn text-center">Log out</button>
                        : <button onClick={auth.login} className="btn text-center">Log in</button>} */}
                    {auth ? <button onClick={logout} className="btn text-center">Log out</button>
                        : <button onClick={login} className="btn text-center">Log in</button>}
                </li>
            </ul>
        </div>
    )
}

export default Menu;