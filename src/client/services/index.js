import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import auth from '@feathersjs/authentication-client';
import superagent from 'superagent';
import localStorage from 'localstorage-memory';

const client = feathers()
    .configure(rest('http://localhost:3030').superagent(superagent))
    .configure(auth({ storage: localStorage }));
