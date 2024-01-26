import axios from "axios";



const getHistory = (number: number = 5) => {
    return axios.get('english/v1/history_user', {
        params: {
            number
        },
    });
};



export default { getHistory }