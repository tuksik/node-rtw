var fs = require('fs');
fs.readFile('hello.js', function(err, contents) {
    console.log(contents);
});