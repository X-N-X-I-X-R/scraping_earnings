// Step 4: Set up an Express.js server
const express = require('express');
const app = express();
const port = 3000;

// Step 5: Add a route for '/news'
app.get('/api/news', async (req, res) => {
  res.json({ message: 'Hello from the news endpoint!' });
});

// Step 6: Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});