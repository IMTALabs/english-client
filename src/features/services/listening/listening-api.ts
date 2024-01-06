import axios from "axios";


const postYoutubeLink = (youtubeUrl: string) => {
    return axios.post('/listening', {
        listen_link: youtubeUrl,
    });
}
export default { postYoutubeLink }