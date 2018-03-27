var http = require('http');
var querystring = require('querystring');

var server = http.createServer().listen(3000);

var number = Math.ceil(10000*Math.random());

server.on('request', function (req, res) {
  if (req.method == 'POST') {
    var body = '';
  }

  req.on('data', function (data) {
    body += data;
  });

  req.on('end', function () {
    // setTimeout(function(){
      res.setHeader('Access-Control-Allow-Origin', '*');
      var post = querystring.parse(body);
      post = Number(post.msg);
      res.writeHead(200, {'Content-Type': 'text/plain'});
      if (post > number) {
        res.end(JSON.stringify('was too big'));
      } else if (post < number) {
        res.end(JSON.stringify('was too small'));
      } else if (post == number) {
        res.end(JSON.stringify('was right! BINGO!'));
        // console.log("BINGO");
        number = Math.ceil(10000*Math.random());
      }    
    // }, 100);
  });
});

console.log('Listening on port 3000');