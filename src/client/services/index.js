import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import auth from '@feathersjs/authentication-client';
import superagent from 'superagent';
import localStorage from 'localstorage-memory';

export const client = feathers()
    .configure(rest(window.location.href).superagent(superagent))
    .configure(auth({ storage: window.localStorage }));

export const postService = client.service('posts');
export const userService = client.service('users');
export const majorService = client.service('majors');
