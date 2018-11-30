const feathers = require('@feathersjs/feathers');
const rest = require('@feathersjs/rest-client');
const auth = require('@feathersjs/authentication-client');

const superagent = require('superagent');
const localStorage = require('localstorage-memory');

const client = feathers();

import './router.js'

client.configure(rest('http://localhost:3030').superagent(superagent))
    .configure(auth({ storage: localStorage }));

// const getCredentials = () => {
//     const user = {
//         email: 'chris.scott.anders@gmail.com',
//         password: 'secret'
//     }

//     return user;
// }

// const login = async credentials => {
//     try {
//         if (!credentials) {
//             // Try to authenticate from localStorage
//             await client.authenticate();
//         }
//         else {
//             const payload = Object.assign({ strategy: 'local' }, credentials);

//             await client.authenticate(payload);
//         }

//         console.log("logged in");
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// document.addEventListener('click', async ev => {
//     switch(ev.target.id) {
//         case 'login': {
//             const user = getCredentials();

//             await login(user);

//             break;
//         }
//     }
// })
// login(getCredentials());



// client.authenticate({
//     strategy: 'local',
//     email: 'chris.scott.anders@gmail.com',
//     password: 'secret'
// })
//     .then(response => {
//         console.log('Authenticated!', response);
//         return client.passport.verifyJWT(response.accessToken);
//     })
//     .then(payload => {
//         console.log('JWT Payload', payload);
//         return client.service('users').get(payload.userId);
//     })
//     .then(user => {
//         client.set('user', user);
//         console.log('User', client.get('user'));
//     })
//     .catch(function (error) {
//         console.error('Error authenticating!', error);
//     });

