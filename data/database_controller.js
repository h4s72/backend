/* Script for abstracting queries for database */
module.exports = {
  start: startUpDatabase,
  stop: shutDownDatabase,
  getUser: getUser
}

const database_manager = require('./database_manager.js');

function startUpDatabase() {
  database_manager.connect();
}

function shutDownDatabase() {
  database_manager.disconnect();
}

function getUser(username) {
  console.log('getUser running with ', username, ' running');
  return database_manager.getRow('SELECT * FROM user WHERE username=\'' + username + '\';');
}