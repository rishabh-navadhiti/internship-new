require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./routes/routes.js');

app.use(express.json());
app.use('/', authRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));