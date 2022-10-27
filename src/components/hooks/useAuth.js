import { useContext, useDebugValue } from "react";
import AuthContext from "../context/authContext";


export default function useAuth() {
    const authContext = useContext(AuthContext);
    // const auth = authContext.isAuthenticated; //zmiana w reducer.js 11.11
    const auth = authContext.user;

    useDebugValue(auth ? 'Logged in' : 'Logged out'); //Narzędzia deweloperskie w Componenets 

    // const setAuth = (isAuthenticated, tokenData = null) => {
    //     if (isAuthenticated) {
    //         authContext.login();
    //         if (tokenData) {
    //             window.localStorage.setItem("token-data", JSON.stringify(tokenData));
    //         }
    //     } else {
    //         authContext.logout();
    //         window.localStorage.removeItem("token-data");
    //     }
    // }

    const setAuth = (user) => {
        if (user) {
            authContext.login(user);
            window.localStorage.setItem("token-data", JSON.stringify(user));
        } else {
            authContext.logout();
            window.localStorage.removeItem("token-data");
        }
    }

    return [auth, setAuth];
}