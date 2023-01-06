const express = require('express');
const fs = require('fs');

const app = express();

const PORT = 8080;

const cors = require('cors');
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
// Endpoint to return all data
app.get('/film', (req, res) => {
  const data = JSON.parse(fs.readFileSync('data.json'));
  return res.send(data);
});

// Endpoint to return data by ID
app.get('/film/:id', (req, res) => {
  const data = JSON.parse(fs.readFileSync('data.json'));
  const id = req.params.id;
  const item = data.find((item) => item.id == id);
  if (item) {
    res.send(item);
  } else {
    res.send({ error: 'Item not found' });
  }
});

app.listen(PORT, () => {
  console.log(`its alive on http://localHost:${PORT}`);
});
