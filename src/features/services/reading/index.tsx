import axios from "axios";

interface Root {
    mode: string
    topic: string
    paragraph: string
}

const postTopicReading = ({ mode, topic, paragraph }: Root) => {
    return axios.post('https://briteshop.store/public/api/reading', {
        mode, topic, paragraph
    });
}
export default { postTopicReading }