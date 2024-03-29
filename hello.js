var http = require('http');
var fs = require('fs');
var url = require('url');
const PORT = process.env.PORT || 5000;
http.createServer(function (req,res){
	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;
	
	if(filename == './'){
		filename = './index';
	}
	filename = filename + '.html';
	console.log(filename);
	fs.readFile(filename , function(err,data){
		if (err){
			res.writeHead(404, {'Content-type': 'text/html'});
			return res.end("404 Not Found");
		}
		res.writeHead(200,{'Content-type': 'text/html'});
		res.write(data);
		
		return res.end();
	})
}).listen(PORT);

console.log("Server listening on Port 8080...");