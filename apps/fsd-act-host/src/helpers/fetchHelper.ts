import { v4 as uuidv4 } from 'uuid';
import fetch from 'isomorphic-fetch';

export const getForAuth = (url: string) => {
  return fetch(url, {
    method: 'GET',
    headers: {
      'X-Correlation-Id': uuidv4(),
      cache: 'no-cache',
      'Cache-control': 'no-cache, no-store',
      Pragma: 'no-cache',
      Expires: '0',
      credentials: 'same-origin',
    },
  }).then((response) => {
    return response.ok ? Promise.resolve(response) : Promise.reject(response);
  });
};

export const postForAuth = (url: string) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'X-Correlation-Id': uuidv4(),
      cache: 'no-cache',
      'Cache-control': 'no-cache, no-store',
      Pragma: 'no-cache',
      Expires: '0',
      credentials: 'same-origin',
    },
  }).then((response) => {
    return response.ok ? Promise.resolve(response) : Promise.reject(response);
  });
};
