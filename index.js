const port = 6722;
const server = require('./server.js');

server.start(port);

process.on('SIGINT', server.closeDown);