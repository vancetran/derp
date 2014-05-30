var connect = require('connect'),
    open = require('open'),
	port = process.argv[2] || 8080;

connect().use(connect.static(__dirname+"/app")).listen(port);
console.log("Static file server running at\n  => http://localhost:" + port + "/\nCTRL + C to shutdown");
open('http://localhost:' + port);