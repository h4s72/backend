module.exports = {
  closeDown: closeDown,
  start: start
}

const database_controller = require('./data/database_controller.js');
const express             = require('express');
const path                = require('path');

const app = express();

app.use(express.static('public'));

function start(portNr) {
  startApp(portNr);
}

function startApp(port) {
  app.listen(port, () => console.log(`Running app on port: ${port}, starting database`));
  database_controller.start();
}

function closeDown() {
  console.log('\n\nApp closed from console, shutting down and stopping databaseconnection');
  database_controller.stop();
  process.exit();
}