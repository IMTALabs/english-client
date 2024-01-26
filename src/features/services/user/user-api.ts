import axios from "axios";

export type FeedbackProps = {
    email?: string,
    message?: string | '',
}



const getInfoUser = () => {
    return axios.get('english/v1/info_user');
}

const postFeedBack = ({ email, message }: FeedbackProps) => {
    return axios.post('english/v1/feedback', {
        email, message
    });
}

export default { getInfoUser, postFeedBack }