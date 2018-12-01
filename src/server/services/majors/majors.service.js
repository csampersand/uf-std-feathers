const createService = require('feathers-mongoose');
const createModel = require('../../models/majors.model');
const hooks = require('./majors.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/majors', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('majors');

  service.hooks(hooks);
};