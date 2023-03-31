import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import fetch from 'isomorphic-fetch';

// const headers = {
//   'Cache-control': 'no-cache, no-store',
//   pragma: 'no-cache',
//   Expires: 0,
// };

export const getForAuth = (url: string) => {
  // return axios
  //   .get(url, {
  //     withCredentials: true,
  //     headers: {
  //       ...headers,
  //       'X-Correlation-Id': uuidv4(),
  //     },
  //   })
  //   .catch((data) => {
  //     console.log('data: ', data);
  //     return data;
  //   })
  //   .then((headers) => console.log(headers));
  return fetch(url, {
    method: 'GET',
    headers: {
      'X-Correlation-Id': uuidv4(),
      redirect: 'manual',
      credentials: 'same-origin',
    },
  }).then((response) => {
    console.log('response: ', response);
    return response.ok ? Promise.resolve(response) : Promise.reject(response);
  });
};
