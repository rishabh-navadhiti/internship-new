const fs = require('fs/promises');
const path = require('path');

const { makeId } = require('../utils/idGenerator');

const PRODUCTS_FILE = path.join(__dirname, '..', 'products.json');


// function to read the product json file and return all products array
async function readProductsFile() {
    try {
        const data = await fs.readFile(PRODUCTS_FILE, 'utf8');
        if (data)
            return JSON.parse(data)
        else
            return [];

    } catch (err) {
        console.error('Error reading products file:', err);
        return [];
    }
}

// function to write (overwirte) given array to the json file.
async function writeProductsFile(products) {
    try {
        await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 2));
    } catch (err) {
        console.error('Error writing products file:', err);
        throw err;
    }
}


async function getAllProducts (req, res) {
    const products = await readProductsFile();
    res.json(products);
};

async function getProductById (req, res) {
    const id = req.params.id;
    const products = await readProductsFile();
    const product = products.find(p => p.id === id);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
};




async function updateProductById (req, res) {
    const id = req.params.id;
    const updatedProduct = req.body;

    const products = await readProductsFile();
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Product not found' });
    }

    products[index] = updatedProduct;

    try {
        await writeProductsFile(products);
        res.json({ success: true, message: 'Product updated successfully' });
    } catch {
        res.status(500).json({ error: 'Failed to update product' });
    }
};

async function addProduct (req, res) {
    const newProduct = req.body;
    newProduct.id = makeId(5);

    const products = await readProductsFile();
    products.push(newProduct);

    try {
        await writeProductsFile(products);
        res.json({ success: true, message: 'Product added successfully' });
    } catch {
        res.status(500).json({ error: 'Failed to add product' });
    }
};

async function deleteProductById (req, res) {
    const id = req.params.id;
    let products = await readProductsFile();
    products = products.filter(p => p.id !== id);

    try {
        await writeProductsFile(products);
        res.json({ success: true, message: 'Product deleted successfully' });
    } catch {
        res.status(500).json({ error: 'Failed to delete product' });
    }
};


exports.deleteProductById = deleteProductById;
exports.addProduct = addProduct;

exports.updateProductById = updateProductById;
exports.getProductById = getProductById;

exports.getAllProducts = getAllProducts;


