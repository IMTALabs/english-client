import axios from "axios";
const env = await import.meta.env

const checkAuth = () => {
  /*  Getting token value stored in localstorage, if token is not present we will open login page 
    for all internal dashboard routes  */
  const TOKEN = localStorage.getItem("token");
  const PUBLIC_ROUTES = [
    "login",
    "forgot-password",
    "register",
    "documentation",
  ];

  const isPublicPage = PUBLIC_ROUTES.some((r) =>
    window.location.href.includes(r)
  );

  if (!TOKEN && !isPublicPage) {
    window.location.href = "/login";
    return;
  } else {
    axios.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`;
    axios.interceptors.request.use(
      function (config) {
        config.headers.Authorization = `Bearer ${TOKEN}`;
        config.baseURL = env.VITE_BASE_URL;
        config.withCredentials = true;
        config.withXSRFToken = true;
        config.timeout = 120000;
        config.headers['Content-Type'] = 'application/json';
        config.headers['Accept'] = 'application/json';

        // UPDATE: Add this code to show global loading indicator
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      function (response) {
        // UPDATE: Add this code to hide global loading indicator
        return response.data === undefined || response.data === null ? response : response.data;
      },
      function (error) {
        if (error.response.status === 401 || error.response.status === 403 || error.response.status === 419) {
          localStorage.clear();
          window.location.href = "/login";
        }
        return Promise.reject(error);
      }
    );
    return TOKEN;
  }
};

export default checkAuth;
