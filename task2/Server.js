var http=require('http');
http.createServer(function(req,res){
 res.write("<h1>Hello Node!!!!</h1>")
}).listen(4000)