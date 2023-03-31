import React from 'react';
import { getForAuth } from '../../../helpers/fetchHelper';

const LoginPage: React.FC = () => {
  const baseUrl = window.origin;

  const redirectToIDAM = () => {
    getForAuth(`/auth/login?redirect_host=${baseUrl}/`)
      .then((response) => {
        console.log('response: ', response);
      })
      .catch((errResponse) => console.error('errResponse', errResponse));
  };

  return (
    <React.Fragment>
      <div>This is the Login Page</div>
      <button onClick={redirectToIDAM}>CLICK HERE</button>
    </React.Fragment>
  );
};

export default LoginPage;
