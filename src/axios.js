import axios from "axios";

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.url = `http://localhost:8080/${config.url}`
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});