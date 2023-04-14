import React from 'react';
import { getForAuth } from '../../../helpers/fetchHelper';
import { redirect } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const baseUrl = window.origin;

  const redirectToIDAM = () => {
    getForAuth(`/auth/login?redirect_host=${baseUrl}`)
      .then((response) => {
        console.log('response.url: ', response.url);
        window.location.replace(response.url);
      })
      .catch((errResponse) => console.error(errResponse));
  };

  return (
    <React.Fragment>
      <div>This is the Login Page</div>
      <button onClick={redirectToIDAM}>CLICK HERE</button>
    </React.Fragment>
  );
};

export default LoginPage;
