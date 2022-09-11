import { useState } from "react";

function useLocalStorage(key, defaultValue) {
    let value;
    const [state, setState] = useState(defaultValue);
    const localStorageValue = window.localStorage.getItem(key);

    if (localStorageValue) {
        value = JSON.parse(localStorageValue);
    } else {
        value = state;
    }

    const setValue = (val) => {
        setState(val);
        window.localStorage.setItem(key, JSON.stringify(val));
    }

    return [value, setValue];
}

export default useLocalStorage;