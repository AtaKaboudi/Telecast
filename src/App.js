import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import env from './env'
import search from './services/youtubeAPI'

function App() {
  const responseGoogle = (response) => {
    console.log(response);
  }
  function apicall() {
    search();
  }
  return (
    <div>
      <GoogleLogin
        clientId="843867201617-jslcpokp20n1p8m91c0k0d9nrv9s336t.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <button onClick={() => { apicall() }}></button>
    </div>
  )

}
export default App;
