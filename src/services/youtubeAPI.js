import axios from 'axios'
export default function search() {
    axios.get('https://www.googleapis.com/youtube/v3/search', {
        headers: {
            'Authorization': `basic `
        },
        body: {
            q: 'surf',
        }
    }).then((res) => {
        console.log(res)
    })
}


