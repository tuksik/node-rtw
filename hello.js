var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200);
    response.write("Hello, this is Luke");
    response.end();
}).listen(5000);

console.log("I'm on 5000");