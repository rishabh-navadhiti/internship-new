const express = require('express');
const router = express.Router();
const path = require('path');

// import callback functions for diff req and routes 
const productController = require('../controllers/productController');

// Edit form page route with id param
router.get('/edit-form/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'product-form.html'));
});

// API routes
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.put('/products/:id', productController.updateProductById);
router.post('/add-product', productController.addProduct);
router.delete('/products/:id', productController.deleteProductById);

module.exports = router;
