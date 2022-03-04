const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("Welcome to overview page");
  } else if (pathName === "/products") {
    res.end("welcome to products page");
  } else {
    res.writeHead(404, {
        'Content-type' : 'text/html'
    });
    res.end("<h1>page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
