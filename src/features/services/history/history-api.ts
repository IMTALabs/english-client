import axios from "axios";

const getHistory = () => {
    return axios.get('english/v1/history_user')
}

export default { getHistory }