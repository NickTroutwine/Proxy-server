var express = require('express');
app = express();
app.get('/',function(req,res){
	res.end('a')
});
var port = process.env.port
port = parseInt(port, 10);
app.listen(port)
