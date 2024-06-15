const { User } = require('../models');

class UserController {
  async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(401).json({ message: 'Invalid email or password' });
    } else {
      const isValid = await user.comparePassword(password);
      if (!isValid) {
        res.status(401).json({ message: 'Invalid email or password' });
      } else {
        const token = await user.generateToken();
        res.json({ token });
      }
    }
  }

  async register(req, res) {
    const { name, email, password } = req.body;
    const user= await User.create({ name, email, password });
    res.json(user);
  }
}

module.exports = UserController;