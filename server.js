const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  res.writeHead(200, { "Content-Type": "text/html" });

  if (url === "/") {
    res.end("<h1>Home Page</h1><p>Welcome to my Node.js server!</p>");
  } else if (url === "/about") {
    res.end("<h1>About Page</h1><p>This is a basic Node server.</p>");
  } else if (url === "/contact") {
    res.end("<h1>Contact Page</h1><p>Email us at hello@example.com</p>");
  } else {
    res.writeHead(404);
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
