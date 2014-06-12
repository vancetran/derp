var express = require('express'),
  open = require('open'),
  serverType = process.argv[2] || 'app';

var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname+'/'+serverType));

app.listen( app.get('port' ), function() {
  console.log("Static file server running at\n  => http://localhost:" + app.get('port') + "/\n Pointing to /"+ serverType +" folder.\n CTRL + C to shutdown");
  open('http://localhost:' + app.get('port'));
});
