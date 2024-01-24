import axios from 'axios';

type Pops = {
  hash: string;
  submit: string[];
};

const postYoutubeLink = (youtubeUrl: string) => {
  return axios.post('/english/v1/listening', {
    listen_link: youtubeUrl,
  });
};
const postMarkListening = (data: Pops) => {
  return axios.post('/english/v1/listening/mark', {
    submit: data.submit,
    hash: data.hash,
  });
};

const getRandomVideoListening = (
  query: string = 'listening',
  maxresults: number = 10,
) => {
  return axios.get('/english/v1/listening/random_video', {
    params: {
      query: query,
      maxResults: maxresults,
    },
  });
};
export default {postYoutubeLink, postMarkListening, getRandomVideoListening};
