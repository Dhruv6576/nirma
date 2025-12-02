const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/login.html'));
});
app.get('/see', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/see.html'));
});
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/admin.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
