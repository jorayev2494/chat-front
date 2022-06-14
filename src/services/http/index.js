import axios from 'axios';
import interceptorRequest from './interceptors/request.js';
import { response as interceptorResponse, error as interceptorError } from './interceptors/response.js';

const SERVER_URL = 'http://127.0.0.1:8000/api' // Localhost
// const SERVER_URL = 'http://80.208.225.82:8088/api' // Develop

let projectAxios = axios.create({
    baseURL: SERVER_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 'X-Custom-Header': 'foobar'
    },
    // withCredentials: true
});

// Request interceptor
projectAxios.interceptors.request.use(interceptorRequest);
  
// Response interceptor
projectAxios.interceptors.response.use(interceptorResponse, interceptorError);

export default projectAxios;