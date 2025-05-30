const express = require('express');
const path = require('path');

const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 3000;

// built in middl ware 
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// route for home page (product display table)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'product-display.html'));
});

// route for new product form page 
app.get('/product-form', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'product-form.html'));
});

// product routes
app.use('/', productRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
