const posts = require('./posts/posts.service.js');
const users = require('./users/users.service.js');
const majors = require('./majors/majors.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(posts);
  app.configure(users);
  app.configure(majors);
};
