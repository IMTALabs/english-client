import axios from "axios";

interface ReadingTopic {
    mode?: string
    topic?: string
    paragraph?: string
}

type Pops = {
    hash: string
    submit: string[]
}


const postArticleReading = ({ mode, topic, paragraph }: ReadingTopic) => {
    return axios.post('/english/v1/reading', {
        mode, topic, paragraph
    });
}

const postTopicReading = ({ topic}: ReadingTopic) => {
    return axios.post('/english/v1/reading/gen_topic', {
        topic
    });
}
const postMarkReading = (data: Pops) => {
    return axios.post('/english/v1/reading/mark', {
        submit: data.submit,
        hash: data.hash
    });
}


export default { postTopicReading, postMarkReading ,postArticleReading }