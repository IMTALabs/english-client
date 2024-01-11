import axios from "axios";

export const authInstance = axios.create({
    baseURL: 'https://imtalabs.tech/',
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})