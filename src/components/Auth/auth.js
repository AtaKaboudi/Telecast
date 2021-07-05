import youtubeAPI from '../../services/youtubeAPI'
import env from '../../env'
import GoogleLogin from 'react-google-login';
import App from '../../App.js';
import { useState } from 'react'
function Auth() {
    let [isLoggedIn, setIsLoggedIn] = useState(false);
    const responseGoogle = (response) => {
        if (!response.accessToken) { console.log('[AUTH] OAUTH TOKEN MISSING'); console.log(response); return }
        console.log("IS LOGGED IN");
        env.OAUTH_TOKEN = response.accessToken;
        setIsLoggedIn(true);
    }
    return (
        <div>{
            isLoggedIn ?
                <App />
                :
                <GoogleLogin
                    clientId="843867201617-jslcpokp20n1p8m91c0k0d9nrv9s336t.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    isSignedIn={true}
                    cookiePolicy={'single_host_origin'}
                    scope={'https://www.googleapis.com/auth/youtube.readonly'}
                />

        }
        </div>
    )
}

export default Auth;