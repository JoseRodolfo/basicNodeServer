// require http from node core modules
const http = require('http');

// routes module we built is imported
const routes = require('./routes')

// select a port of choice
const port = 5000;

// set up of server
const server = http.createServer (routes);

// listens for server, logs when server is running
server.listen(port, () =>{
  console.log('server is running on port 5000')
})
