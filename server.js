const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const url = req.url;

  // ✅ Serve static CSS
  if (url === "/style.css") {
    fs.readFile("./public/style.css", (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end("CSS file not found.");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(content);
    });
    return; // stop here after serving static
  }

  // ✅ Serve HTML files
  let filePath = "./pages" + url;
  if (filePath === "./pages/") filePath = "./pages/index.html";
  else filePath += ".html";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 - Page Not Found</h1>");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(content);
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
