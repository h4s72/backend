module.exports = {
  handle: handle,
  create: createUser,
  update: updateUser
}

const database_controller   = require('../data/database_controller.js');

function handle(request, response) {
  database_controller.getUser(request.params.user)
  .then(user => response.json(user))
  .catch(() => response.json({ message: 'User could not be found' }))
}

function createUser(request, response) {
  database_controller.createUser(request.body.username)
  .then(() => response.json({ message: 'User was successfully created' }))
  .catch(() => response.json({ message: 'Could not create user' }))
}

function updateUser(request, response) {
  database_controller.updateUser(request.params.user, request.body)
  .then(updatedUser => response.json({ message: 'User was successfully updated' }))
  .catch((err) => response.json({ message: 'Could not update user' }))
}