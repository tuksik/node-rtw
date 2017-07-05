// http://campus.codeschool.com/courses/real-time-web-with-node-js/level/1/read-file-in-server
var http = require('http');
var fs = require('fs');
http.createServer(function(request, response) {
    response.writeHead(200);
    fs.readFile('index.html', function(error, contents) {
        response.write(contents);
        response.end();
    });
}).listen(5000);