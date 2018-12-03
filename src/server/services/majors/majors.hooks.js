const { authenticate } = require('@feathersjs/authentication').hooks;

const processMajor = require('../../hooks/process-majors')

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [ processMajor(), authenticate('jwt' ) ],
    update: [authenticate('jwt' )],
    patch: [authenticate('jwt' )],
    remove: [authenticate('jwt' )]
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
