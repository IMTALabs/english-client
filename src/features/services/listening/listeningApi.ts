import axios from "axios";


const postYoutubeLink = (youtubeUrl: string) => {
    return axios.post('https://briteshop.store/public/api/listening', {
        listen_link: youtubeUrl,
    });
}
export default { postYoutubeLink }