import axios from 'axios'
import env from '../env'
var youtubeAPI = {
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
            }
        })
    },


};


export default youtubeAPI

