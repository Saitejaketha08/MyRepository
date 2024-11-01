import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';

function GoogleAndFacebook() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleGoogleSuccess = (credentialResponse) => {
    const userProfile = decodeJwt(credentialResponse.credential);
    setUserName(userProfile.name);
    setIsLoggedIn(true);
  };

  const decodeJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  };

  const handleFacebookResponse = (response) => {
    if (response.status !== 'unknown') {
      console.log('Facebook Login Success:', response);
      setUserName(response.name);
      setIsLoggedIn(true);
    } else {
      console.error('Facebook Login Failed:', response);
    }
  };

  return (
    <>
      {!isLoggedIn ? (
        <>
          <h2>Login</h2>
          <GoogleLogin onSuccess={handleGoogleSuccess} />
          <FacebookLogin
            appId="YOUR_FACEBOOK_APP_ID" // Replace with your Facebook App ID
            autoLoad={false}
            fields="name,email,picture"
            callback={handleFacebookResponse}
            textButton="Login with Facebook"
          />
        </>
      ) : (
        <h1 style={{ color: 'green' }}>Hi {userName}, Welcome to online shopping....</h1>
      )}
    </>
  );
}

export default GoogleAndFacebook;
