import axios from 'axios';

const KEY = 'AIzaSyAeMZyTNoncCIjHaeZEgc_xweI-o8lKnSU';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        maxResults: 5,
        key: KEY
    }
});