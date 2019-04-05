module.exports = {
  handle: handle,
  create: createUser,
  update: updateUser
}

const database_controller   = require('../data/database_controller.js');

function handle(request, response) {
  database_controller.getUser(request.params.user)
  .then(user => response.json(user))
  .catch(() => response.status(404).json({ message: 'User could not be found' }))
}

function createUser(request, response) {
  database_controller.createUser(request.body.username)
  .then(() => response.json({ message: 'User was successfully created' }))
  .catch(() => response.status(400).json({ message: 'Could not create user' }))
}

function updateUser(request, response) {
  database_controller.updateUser(request.params.user, request.body)
  .then(updatedUser => response.json({ message: 'User was successfully updated' }))
  .catch((err) => response.status(400).json({ message: 'Could not update user' }))
}