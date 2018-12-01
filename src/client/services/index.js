import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import auth from '@feathersjs/authentication-client';
import superagent from 'superagent';
import localStorage from 'localstorage-memory';

export const client = feathers()
    .configure(rest('http://localhost:3030').superagent(superagent))
    .configure(auth({ storage: window.localStorage }));

client.authenticate()
    .then(response => {
        console.log('Authenticated!', response);
        return client.passport.verifyJWT(response.accessToken);
    })
    .then(payload => {
        console.log('JWT Payload', payload);
        return client.service('users').get(payload.userId);
    })
    .then(user => {
        client.set('user', user);
        console.log('User', client.get('user'));
    })
    .catch(function(error){
        console.error('Error authenticating!', error);
    });
