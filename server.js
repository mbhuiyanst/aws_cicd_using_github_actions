// app/server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (e.g., CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Serve homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Optional: Serve other routes directly (handled by static middleware above)
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Example of dynamic content with routes
app.get('/about', (req, res) => {
  res.send('About Us Page');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
