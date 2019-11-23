let connect = require("connect");
let serveStatic = require("serve-static");
connect()
  .use(serveStatic(__dirname))
  .listen(8080, function() {
    console.log("Server running on 8080...");
  });

// let http = require("http");
// let fs = require("fs");

// const PORT = 8080;

// fs.readFile("./index.html", function(err, html) {
//   if (err) throw err;

//   http
//     .createServer(function(request, response) {
//       response.writeHeader(200, { "Content-Type": "text/html" });
//       response.write(html);
//       response.end();
//     })
//     .listen(PORT);
// });
