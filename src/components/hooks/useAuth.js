import { useContext, useDebugValue } from "react";
import AuthContext from "../context/authContext";


export default function useAuth() {
    const authContext = useContext(AuthContext);
    const auth = authContext.isAuthenticated;

    useDebugValue(auth ? 'Logged in' : 'Logged out'); //Narzędzia deweloperskie w Componenets 

    const setAuth = (value) => {
        if (value) {
            authContext.login();
        } else {
            authContext.logout();
        }
    }

    return [auth, setAuth];
}