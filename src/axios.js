import axios from "axios";

const instance = axios.create({
    baseURL: "https://hotelsdb-6ba12-default-rtdb.europe-west1.firebasedatabase.app"
});

export default instance;