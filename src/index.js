var http = require('http');
var url = require('url');
var romanNumeric = require('./romanNumeric');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var roman = romanNumeric.transformToRoman(q.number);
  Number.isInteger(parseInt(q.number)) ? res.end(`The roman number in query parameter is ${roman}`) : res.end(`That is not a number... don't troll`);
}).listen(8080);
