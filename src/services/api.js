import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_HOST_API;
const API_KEY = import.meta.env.VITE_API_KEY;
const CSRF_TOKEN = import.meta.env.VITE_CSRF_TOKEN;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'x-api-key': API_KEY,
    'X-CSRF-TOKEN': CSRF_TOKEN,
    'Content-Type': 'application/json',
  },
});

export default api;
