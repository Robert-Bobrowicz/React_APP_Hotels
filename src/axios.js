//to jest instancja axiosa z linkiem url do bazy danych na firebase bez autentykacji

import axios from "axios";

const instance = axios.create({
    baseURL: "https://hotelsdb-6ba12-default-rtdb.europe-west1.firebasedatabase.app"
});

export default instance;