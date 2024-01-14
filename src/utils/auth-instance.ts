import axios from "axios";

const env = await import.meta.env

export const authInstance = axios.create({
    baseURL: env.VITE_AUTH_BASE_URL,
    withCredentials: true,
    withXSRFToken: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})