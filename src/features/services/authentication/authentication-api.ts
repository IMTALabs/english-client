import axios from "axios";
import { authInstance } from "src/utils/auth-instance";

export type postLoginPayload = {
    email: string;
    password: string;
}


const postLogin = (payload: postLoginPayload) => {
    return authInstance.get("sanctum/csrf-cookie").then(() => {
        return authInstance.post('api/login', payload)
    })
}

const postLogout = () => {
    return authInstance.post('api/logout');
}

const postRegister = (payload: postLoginPayload) => {
    return authInstance.post('api/register', payload);
}




export default { postLogin, postLogout, postRegister }