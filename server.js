module.exports = {
  closeDown: closeDown,
  start: start
}

const database_controller = require('./data/database_controller.js');
const express             = require('express');
const path                = require('path');
const user                = require('./server_handlers/user.js');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/api/:user', (req, res) => user.handle(req, res));
app.post('/api/user', (req, res) => user.create(req, res));
app.put('/api/:user', (req, res) => user.update(req, res));

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