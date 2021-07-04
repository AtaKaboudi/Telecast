import youtubeAPI from '../../services/youtubeAPI'
import env from '../../env'
import GoogleLogin from 'react-google-login';

function Auth() {
    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.accessToken);
        env.OAUTH_TOKEN = response.accessToken || "";
    }

    function apicall() {
        youtubeAPI.search('surf');
    }
    return (
        <div>
            <GoogleLogin
                clientId="843867201617-jslcpokp20n1p8m91c0k0d9nrv9s336t.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                isSignedIn={true}
                cookiePolicy={'single_host_origin'}
                scope={'https://www.googleapis.com/auth/youtube.readonly'}
            />
            <button onClick={() => { apicall() }}></button>
        </div>
    )
}

export default Auth;