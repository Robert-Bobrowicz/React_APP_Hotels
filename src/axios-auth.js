import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_AXIOS_AUTH
});

export default instance;