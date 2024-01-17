import axios from "axios";

type Pops = {
    hash: string
    submit: string[]
}


const postYoutubeLink = (youtubeUrl: string) => {
    return axios.post('/english/v1/listening', {
        listen_link: youtubeUrl,
    });
}
const postMarkListening = (data: Pops) => {
    return axios.post('/english/v1/listening/mark', {
        submit: data.submit,
        hash: data.hash
    });
}
export default { postYoutubeLink, postMarkListening }