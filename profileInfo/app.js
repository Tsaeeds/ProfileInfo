var http = require('http');
var router = require('./router');
http.createServer(function (req, res) {

 router.home(req, res);
  router.user(req, res);
   
  
}).listen(3000);

console.log("server is running...")







