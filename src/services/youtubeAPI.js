import axios from 'axios'
import env from '../env'
var youtubeAPI = {
    async search() {
        let result;
        console.log(env.OAUTH_TOKEN + '/');
        return axios({
            method: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/search',
            headers: {
                'Authorization': `Bearer ${env.OAUTH_TOKEN}`
            },
            params: {
                part: "snippet",
                maxResults: 12,
            }
        })
    },
    async search(key) {
        let result;
        console.log(env.OAUTH_TOKEN + '/');
        return axios({
            method: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/search',
            headers: {
                'Authorization': `Bearer ${env.OAUTH_TOKEN}`
            },
            params: {
                part: "snippet",
                q: key,
                maxResults: 12,
            }
        })
    },


};


export default youtubeAPI

