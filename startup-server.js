var cp = require("child_process");
var fs = require("fs");
var portscanner = require("portscanner");


modules.export = function (name, callback){
portscanner.findAPortNotInUse(1000, 1050, '127.0.0.1', function(error, port) {
  console.log('AVAILABLE PORT AT: ' + port)
  	var options = {
  		cwd:__dirname+"/our-website/"+name,
  		env: {port: port}
  	};
	var child = cp.spawn("node server",options);
	callback(null,{
		port:port,
		name:name,
		child:child
	})
})

}
// https://nodejs.org/api/child_process.html
//enviroment variables