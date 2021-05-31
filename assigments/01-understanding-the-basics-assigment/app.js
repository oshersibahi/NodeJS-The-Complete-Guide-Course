const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes.handler);

//localhost:3000
server.listen(3000);