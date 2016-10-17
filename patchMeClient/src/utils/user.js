'use strict';
const serverAdress = 'http://localhost:5000/';

export const getUser = (token) =>
  new Promise((resolve, reject) => {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', token);
    const myInit = {
      method: 'GET',
      headers: myHeaders
    };
    fetch(`${serverAdress}users/0`, myInit)
      .then((response) => {
        if (response.status !== 200) {
          reject(response.status);
        }
        return response.json();
      })
      .then(resolve)
      .catch(reject);
  });

export const createUser = (token) =>
  new Promise((resolve, reject) => {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', token);
    const myInit = {
      method: 'POST',
      headers: myHeaders
    };

    fetch(`${serverAdress}users`, myInit)
      .then((response) => {
        if (response.status === 200 || response.status === 409) {
          return response.json()
            .then((data) => {
              return resolve([data, response.status]);
            })
            .catch(reject);
        }
        return reject(response.status);
      })
      .catch(reject);
  });

export const getBearerToken = (oauthCode) =>
 new Promise((resolve, reject) => {
   const serverBearerAdress = `${serverAdress}token?grant_type=facebook_auth_code&auth_code=${oauthCode}`;
   const myInit = {
     method: 'POST',
   };
    fetch(serverBearerAdress, myInit)
      .then((response) => {
        return response.json();
      })
      .then((token) => {
        resolve(token.access_token);
      })
      .catch(reject);
  });
