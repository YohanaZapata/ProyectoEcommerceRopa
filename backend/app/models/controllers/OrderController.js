const { Order } = require('../models');

class OrderController {
  async createOrder(req, res) {
    const { userId, products } = req.body;
    const order = await Order.create({ userId, products });
    res.json(order);
  }

  async getOrdersByUser(req, res) {
    const userId = req.params.userId;
    const orders = await Order.findAll({ where: { userId } });
    res.json(orders);
  }
}

module.exports = OrderController;