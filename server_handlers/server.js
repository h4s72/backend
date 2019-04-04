module.exports = {
  closeDown: closeDown,
  start: start
}

const database_controller = require('../data/database_controller.js');
const express             = require('express');

const app = express();


function start(portNr) {
  startApp(portNr);
}

app.get('/', (req, res) => res.send('hello world'));

function startApp(port) {
  app.listen(port, () => console.log(`Running app on port: ${port}, starting database`));
  database_controller.start();
}

function closeDown() {
  console.log('\n\nApp closed from console, shutting down and stopping databaseconnection');
  database_controller.stop();
  process.exit();
}