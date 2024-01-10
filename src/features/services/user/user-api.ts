import axios from "axios";
const getInfoUser = () => {
    return axios.get('english/v1/info_user');
}

export default { getInfoUser }