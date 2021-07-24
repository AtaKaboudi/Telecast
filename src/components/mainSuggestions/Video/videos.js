import './Video.css'
import { useHistory } from 'react-router-dom'
import React from 'react'
function Video(props) {
    let params = props.params
    let history = useHistory();

    const redirectToFeed = (e) => {
        let url = "/video/" + params.videoId;
        history.push(url);
    }
    return (
        <div className="videoWrapper" onClick={(e) => { redirectToFeed(e) }}>
            <img src={params.thumbnails.medium.url} ></img>
            <h2>{params.title}</h2>
            <p>{params.description}</p>
            <div>
                <h2>{params.channelTitle}</h2>
                <label>{params.publishTime}</label>
            </div>
        </div>
    )
}


export default Video;