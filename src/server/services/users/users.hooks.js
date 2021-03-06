const { authenticate } = require('@feathersjs/authentication').hooks;
const populateMajors = require('../../hooks/populate-majors');

const processUser = require('../../hooks/process-user');
const processFollowing = require('../../hooks/process-following');

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt') ],
    get: [ authenticate('jwt') ],
    create: [ hashPassword(), processUser()],
    update: [ hashPassword(),  authenticate('jwt'),processUser() ],
    patch: [ authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
    find: [],
    get: [ populateMajors() ],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
