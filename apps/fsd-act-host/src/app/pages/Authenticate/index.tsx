import React from 'react';
import { postForAuth } from '../../../helpers/fetchHelper';
import { redirect } from 'react-router-dom';

const Authenticate: React.FC = () => {
  React.useEffect(() => {
    console.log('mounted');
  }, []);
  // const queryParam = window.location.search;
  // const baseUrl = window.origin;
  // postForAuth(`/auth/authenticate${queryParam}&redirect_host=${baseUrl}`)
  //   .then(() => {
  //     redirect('/customer');
  //   })
  //   .catch((errResponse) =>
  //     redirect(`/error?error-code=${errResponse.status}`)
  //   );
  return <div>This is the authenticate page</div>;
};

export default Authenticate;
