//usage of file system (fs) to read the content from the sepcific file
const fs = require("fs");

const text = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(text);

// usage of template string literals to plug in the text
const textOut = `This is what we know about Avocado: ${text}.\n Created on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File created");
