/* Script for abstracting queries for database */
module.exports = {
  start: startUpDatabase,
  stop: shutDownDatabase,
  getUser: getUser,
  createUser: createUser,
  updateUser: updateUser
  // Get leaderboard
}

const database_manager = require('./database_manager.js');
const _ = require('lodash');

function startUpDatabase() {
  database_manager.connect();
}

function shutDownDatabase() {
  database_manager.disconnect();
}

function getUser(username) {
  return database_manager.getRow('SELECT * FROM user WHERE username=\'' + username + '\';');
}

function createUser(username) {
  return database_manager.query(`INSERT INTO user(username) VALUES('${username}');`)
}

function updateUser(username, userObject) {
  let toUpdate = _.omit(userObject, ['id', 'username']);
  let updateQuery = setupUpdateQuery(username, toUpdate);
  return database_manager.query(updateQuery);
}

function setupUpdateQuery(username, toUpdate) {
  let updateString = `UPDATE user SET `;
  let keys = Object.keys(toUpdate);
  let pastFirst = false;
  keys.forEach(key => {
    if (pastFirst) {
      updateString += `, `;
    }
    pastFirst = true;
    if (typeof toUpdate[key] === 'string') {
      updateString += `${key}='${toUpdate[key]}'`
    }
    else {
      updateString += `${key}=${toUpdate[key]}`
    }
  })
  return `${updateString} WHERE username='${username}';`;
}