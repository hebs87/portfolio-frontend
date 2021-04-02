import axios from 'axios';

let baseUrl = process.env.REACT_APP_URL;

const API = axios.create({
  baseURL: baseUrl,
  responseType: "json",
});

export default API;
