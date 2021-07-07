import axios from 'axios'
import env from '../env'
var youtubeAPI = {
    async search() {
        let result;
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
    async related(id) {
        return axios({
            method: 'GET',

            url: 'https://www.googleapis.com/youtube/v3/search',
            headers: {
                'Authorization': `Bearer ${env.OAUTH_TOKEN}`
            },
            params: {
                part: "snippet",
                maxResults: 8,
                relatedToVideoId: id,
                type: "video"
            }
        });
    },
    async videoDetails(id) {
        return axios({
            method: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/videos',
            headers: {
                'Authorization': `Bearer ${env.OAUTH_TOKEN}`
            },
            params: {
                part: "snippet,contentDetails,statistics",
                id: id,
            }
        })
    }

};


export default youtubeAPI

