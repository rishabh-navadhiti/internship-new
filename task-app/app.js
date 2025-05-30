const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('./test-project-f4196-firebase-adminsdk-fbsvc-533eab065e.json');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Firebase APP!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});