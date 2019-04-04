/* Script for abstracting queries for database */
module.exports = {
  start: startUpDatabase,
  stop: shutDownDatabase
}

const database_manager = require('./database_manager.js');

function startUpDatabase() {
  console.log('startUpDatabase running');
  database_manager.connect();
}

function shutDownDatabase() {
  console.log('shutDownDatabase running');
  database_manager.disconnect();
}