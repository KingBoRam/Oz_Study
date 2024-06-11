import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '1740a25fa10f613fd3f0006305bb82c8',
    language: 'ko-KR',
  },
});

export default instance;
