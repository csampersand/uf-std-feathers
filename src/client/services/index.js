import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import auth from '@feathersjs/authentication-client';
import superagent from 'superagent';
import localStorage from 'localstorage-memory';

export const client = feathers()
    .configure(rest('http://localhost:3030').superagent(superagent))
    .configure(auth({ storage: window.localStorage, idField: '_id' }));

client.authenticate().then(() => console.log('Authenticated user: ' + client.get('user')))

export const postService = client.service('posts');
export const userService = client.service('users');
export const majorService = client.service('majors');
