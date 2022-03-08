// //usage of file system (fs) to read the content from the sepcific file
// const fs = require("fs");

// const text = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(text);

// // Blocking, synchronous way
// // usage of template string literals to plug in the text
// const textOut = `This is what we know about Avocado: ${text}.\n Created on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File created");

// // Non-blocking asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   console.log(data1);
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//         fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", err => {
//             console.log("writing is completed into the file");
//         })
//     })
//   });
// });
// console.log("read file is going on......");

/////////////// WARM UP /////////////


const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("Welcome to overview page");
  } else if (pathName === "/products") {
    res.end("welcome to products page");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});

