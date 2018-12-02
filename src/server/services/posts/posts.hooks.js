const { authenticate } = require('@feathersjs/authentication').hooks;

const processPost = require('../../hooks/process-post');

const populateUser = require('../../hooks/populate-user');

const checkUserIsAdmin = require('../../hooks/check-user-admin');

module.exports = {
  before: {
    all: [ authenticate('jwt' ) ],
    find: [],
    get: [],
    create: [processPost()],
    update: [processPost()],
    patch: [processPost()],
    remove: [checkUserIsAdmin()]
  },

  after: {
    all: [populateUser()],
    find: [],
    get: [],
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
