import axios from "axios";

let api = axios.create();
api.defaults.headers.get.Accept = "application/json";
api.defaults.headers.post.Accept = "application/json";


const signal = axios.CancelToken.source();

export { api, signal };