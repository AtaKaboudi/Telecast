import './App.css';
import React from 'react';
import NavBar from './components/navbar/navbar';
import Suggestions from './components/mainSuggestions/mainSuggestions';
import { useEffect, useState } from 'react'
import youtubeAPI from './services/youtubeAPI';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VideoFeed from './components/videoFeed/videoFeed';
import {suggestionVideos} from './redux/store'
/* eslint-disable */
function App() {
  
  function search(key) {
    youtubeAPI.search(key).then(res => setVideosList(res.data.items.map(element => { return ({ ...element.id, ...element.snippet }) })));
  }
 
  return (
    <div>

      <Switch>
        <Route path="/" render={(props) => <div>
          <NavBar search={search} />
          <Suggestions  />
        </div>} exact />

        <Route path="/video/:videoId" component={VideoFeed} />
      </Switch>

    </div>
  )

}
export default App;



