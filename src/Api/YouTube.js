import axios from 'axios';

const KEY = 'AIzaSyD2FtYZXSNLMdKnXB4p2niWJwpqiS-z8gc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})