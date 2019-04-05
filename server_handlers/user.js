module.exports = {
  handle: handle
}

const database_controller   = require('../data/database_controller.js');

function handle(request, response) {
  database_controller.getUser(request.params.user)
  .then(user => {
    response.send(user);
  })
}