const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = "./pages" + req.url;

  if (filePath === "./pages/") {
    filePath = "./pages/index.html";
  } else {
    filePath += ".html";
  }

  const extname = path.extname(filePath);
  const contentType = extname === ".html" ? "text/html" : "text/plain";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 - Page Not Found</h1>");
      return; // 👈 prevent sending more responses
    }

    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  });
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
