import axios from "axios";

interface ReadingTopic {
    mode: string
    topic: string
    paragraph: string
}

const postTopicReading = ({ mode, topic, paragraph }: ReadingTopic) => {
    return axios.post('/reading', {
        mode, topic, paragraph
    });
}
export default { postTopicReading }