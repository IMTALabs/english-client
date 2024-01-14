import axios from "axios";

export const authInstance = axios.create({
    baseURL: 'https://briteshop.store/pulic/',
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})