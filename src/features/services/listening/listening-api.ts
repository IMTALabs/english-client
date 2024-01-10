import axios from "axios";


const postYoutubeLink = (youtubeUrl: string) => {
    return axios.post('/english/v1/listening', {
        listen_link: youtubeUrl,
    });
}
export default { postYoutubeLink }