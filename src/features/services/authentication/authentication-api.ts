import axios from "axios";


export type postLoginPayload = {
    email: string;
    password: string;
}


const postLogin = (payload: postLoginPayload) => {
    return axios.get("sanctum/csrf-cookie", {
        baseURL: "https://imtalabs.tech/"
    }).then(() => {
        console.log(payload);

        return axios.post('login', payload)
    })
}

const postLogout = () => {
    return axios.post('logout');
}

const postRegister = (payload: postLoginPayload) => {
    return axios.post('register', payload);
}

export default { postLogin, postLogout, postRegister }