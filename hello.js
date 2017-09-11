var http = require('http');

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    response.write("hello World");
    response.end();
}).listen(8080);