/* Script for handling queries and connecting and disconnecting to database */
module.exports = {
  connect: connect,
  disconnect: disconnect 
}

const sqlite3 = require('sqlite3').verbose();
var db;

function connect() {
  console.log('CONNECT RUNNING IN DB MANAGER');
  db = new sqlite3.Database('./data/dev_database.db');
}

function disconnect() {
  db.close();
  console.log('DISCONNECTED RUNNING IN DB MANAGER');
}

