import express from 'express';

const app = express();
const port = 3000;

// Serve static files from public directory
app.use(express.static('public'));

// API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello Bikrant' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});