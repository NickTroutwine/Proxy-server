var bouncy = require('bouncy');
var startupServer = require('./startup-server.js');
startupServer(function());

var server = bouncy(function (req, res, bounce) {
    if (req.headers.host === 'beep.example.com') {
        bounce(8001);
    }
    else if (req.headers.host === 'boop.example.com') {
        bounce(8002);
    }
    else {
        res.statusCode = 404;
        res.end('no such host');
    } 
});
server.listen(8000);