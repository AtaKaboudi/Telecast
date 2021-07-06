import './mainSuggestions.css'
import { useState, useEffect } from 'react'
import youtubeAPI from '../../services/youtubeAPI';
import Video from './Video/videos';
function Suggestions(props) {
    let videosList = props.videosList

    return (
        <div className="mainSuggestionsWrapper">
            <h1>Suggestions</h1>
            {
                videosList.map(element => {
                    return (
                        <Video params={element} key={element.videoId} />
                    )

                })
            }
        </div >

    )
}





export default Suggestions;