var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(JSON.stringify({ status: "OK", date: new Date().toISOString() }));
  })
  .listen(process.env.PORT || 8080);
console.log(`Listening on port: ${process.env.PORT || 8080}`);
