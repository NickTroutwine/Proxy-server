var bouncy = require('bouncy');
var startupServer = require('./startup-server.js');

var fs = require("fs");
var ourWebsites = fs.readdirSync(__dirname + "/our-website");
var webArray = [];
for(var i=0;i<ourWebsites.length;i++){
   startupServer(ourWebsites[i],function(error,object){
    webArray.push(object);
   }); 
}
var server = bouncy(function (req, res, bounce) {
    for(var x=0;x<webArray.length;x++){
        if (req.headers.host === webArray[x].name) {
            return bounce(webArray[x].port);
        }
    }
        res.statusCode = 404;
        res.end('no such host');
});
server.listen(8000);
