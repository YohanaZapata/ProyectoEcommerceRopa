const { Product } = require('../models');

class ProductController {
  async getAllProducts(req, res) {
    const products = await Product.findAll();
    res.json(products);
  }

  async getProductById(req, res) {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
    } else {
      res.json(product);
    }
  }
}

module.exports = ProductController;