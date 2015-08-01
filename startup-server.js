var cp = require("child_process");
var fs = require("fs");

modules.export = function (callback){
var ourWebsites = fs.readdirSync(__dirname + "/our-website");
for(var i = 0;i<ourWebsites;i++){
	var options = {cwd:__dirname+"/our-website/"+ourWebsites[i]};
	callback(ourWebsites[i],options);
	cp.spawn("node server",options);

}
}