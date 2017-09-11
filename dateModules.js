var http = require('http');
var cdt = require('./cdt.js');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    response.write(cdt.currentDateTime());
    response.end();
}).listen(8080);