/* Script for handling queries and connecting and disconnecting to database */
module.exports = {
  connect: connect,
  disconnect: disconnect,
  getRow: getRow
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

function query(query) {
  return new Promise((resolve, reject) => {
    db.run(query, err => {
      if (err) { reject(err); }
      else { resolve('Successfull run query to database'); }
    });
  });
}

function getRow(query) {
  return new Promise((resolve, reject) => {
    db.get(query, (err, row) => {
      if (err) { 
        reject(err);
      }
      resolve(row);
    })
  })
}

function getAll(query){
  return new Promise((resolve, reject) => {
    db.all(query, (err, rows) => {
      if (err) { reject(err); }
      else { resolve(rows); }
    });
  });
}