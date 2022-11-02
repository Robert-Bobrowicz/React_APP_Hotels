//to jest instancja axiosa z linkiem url do bazy danych na firebase bez autentykacji

import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

export default instance;