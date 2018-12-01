const { authenticate } = require('@feathersjs/authentication').hooks;

const processMajor = require('../../hooks/process-majors')

module.exports = {
  before: {
    all: [authenticate('jwt' )],
    find: [],
    get: [],
    create: [ processMajor() ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
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
