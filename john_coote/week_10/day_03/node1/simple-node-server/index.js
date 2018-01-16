const http = require('http');

http.createServer( (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end("hello world");
}).listen(8000)

// http.createServer( function (request, response) {
//
// })

console.log('Server is running at http://localhost:8000');
