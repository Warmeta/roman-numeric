var http = require('http');
var url = require('url');
var romanNumeric = require('./romanNumeric');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var roman = romanNumeric.transformToRoman(q.number);
  res.end(`The roman number in query parameter is ${roman}`);
}).listen(8080);
