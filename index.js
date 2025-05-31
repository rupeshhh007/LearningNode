const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('Hello, Node.js + Express!');
});

// Sample POST route
app.post('/greet', (req, res) => {
  const name = req.body.name || 'Guest';
  res.send(`Hello, ${name}!`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
