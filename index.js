//usage of file system (fs) to read the content from the sepcific file
const fs = require("fs");

const text = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(text);

// Blocking, synchronous way
// usage of template string literals to plug in the text
const textOut = `This is what we know about Avocado: ${text}.\n Created on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File created");

// Non-blocking asynchronous way
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  console.log(data1);
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
        fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", err => {
            console.log("writing is completed into the file");
        })
    })
  });
});
console.log("read file is going on......");
