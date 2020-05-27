import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:44320/api/v1/',
});

export default api;