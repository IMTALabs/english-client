import axios from "axios";

interface ReadingTopic {
    mode: string
    topic: string
    paragraph: string
}

type Pops = {
    hash: string
    submit: string[]
}


const postTopicReading = ({ mode, topic, paragraph }: ReadingTopic) => {
    return axios.post('/english/v1/reading', {
        mode, topic, paragraph
    });
}
const postMarkReading = (data: Pops) => {
    return axios.post('/english/v1/listening/mark', {
        submit: data.submit,
        hash: data.hash
    });
}


export default { postTopicReading }