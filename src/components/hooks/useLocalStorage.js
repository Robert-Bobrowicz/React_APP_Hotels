import { useState } from "react";

function useLocalStorage(key, defaultValue) {
    const [state, setState] = useState(() => {
        const localStorageValue = window.localStorage.getItem(key);
        return localStorageValue ? JSON.parse(localStorageValue) : defaultValue;
    })

    const setValue = (val) => {
        setState(val);
        window.localStorage.setItem(key, JSON.stringify(val));
    }

    return [state, setValue];
}

export default useLocalStorage;