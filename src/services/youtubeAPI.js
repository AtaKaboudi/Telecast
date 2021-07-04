import axios from 'axios'
import env from '../env'
var youtubeAPI = {
    search: function (key) {
        console.log(env.OAUTH_TOKEN + '/');
        axios({
            method: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/search',
            headers: {
                'Authorization': `Bearer ${env.OAUTH_TOKEN}`
            },
            params: {
                part: "snippet",
                q: key,
            }
        }).then(res => {
            console.log(res);
        })
    },


};


export default youtubeAPI

