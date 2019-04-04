const port = 6722;
const server = require('./server_handlers/server.js');

server.start(port);

process.on('SIGINT', server.closeDown);