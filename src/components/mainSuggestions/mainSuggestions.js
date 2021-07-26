import './mainSuggestions.css'
import { useState, useEffect } from 'react'
import youtubeAPI from '../../services/youtubeAPI';
import Video from './Video/videos';
import { suggestionVideos } from '../../redux/store';
/*eslint-disable*/
function Suggestions(props) {
       
    let [videosList, setVideosList] = useState();
    function trimApiData(res) {
          
        let newValue = res.data.items.map(element => ({ ...element.id, ...element.snippet }))
        newValue[0].pageDetails = res.data.pageInfo;
        newValue[0].nextPageToken = res.data.nextPageToken;
        return newValue
        
    }

    useEffect(async () => {
        suggestionVideos.dispatch({type : 'SUGGEST'})
        suggestionVideos.getState().then(res => {
             setVideosList(TrimApiData(res))
        })
      }
        , []);

    
    suggestionVideos.subscribe(async () => {
        await suggestionVideos.getState().then((res) => {
          setVideosList(trimApiData(res))
         }
      );
      })
      function nextPage() {
        suggestionVideos.dispatch({type:'UPDATE',payload : videosList[0].nextPageToken})
    }
    
    return (
        <div className="mainSuggestionsWrapper">

            <h1>Suggestions</h1>
            {
                videosList.map(element => {
                    if ((!element.thumbnails) || (!element.description)) return ""
                    return (
                        <Video params={element} key={element.videoId} />
                    )

                })

            }
            {videosList[0].pageDetails ?
                <footer >
                    <div>
                        <h3>{videosList[0].pageDetails.totalResults}</h3>
                        <label>Results</label>
                    </div>
                    <button onClick = { nextPage}>
                    <span class="material-icons">arrow_forward_ios</span>
                    </button>
                </footer>
                :
                ""
            }
        </div >

    )
    

   return <h1>Shit</h1>
}





export default Suggestions;