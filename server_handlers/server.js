const express = require('express');
const app = express();

module.exports.start = start;

function start(portNr) {
  startApp(portNr);
}

app.get('/', (req, res) => res.send('hello world'));

function startApp(port) {
  app.listen(port, () => console.log('Running app on port: ', port));
}