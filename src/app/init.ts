import axios from "axios";

const REACT_APP_BASE_URL = 'https://reqres.in/';


const env = (await import.meta)?.env;

const initializeApp = () => {
  // Setting base URL for all API request via axios
  axios.defaults.baseURL = REACT_APP_BASE_URL;
};

export default initializeApp;
