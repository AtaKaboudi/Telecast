import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './components/Auth/auth'
import NavBar from './components/navbar/navbar';
import Suggestions from './components/mainSuggestions/mainSuggestions';
function App() {

  return (
    <div>
      <NavBar />
      <Suggestions />
    </div>
  )

}
export default App;
