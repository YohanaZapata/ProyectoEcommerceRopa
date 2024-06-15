module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      products: {
        type: DataTypes.TEXT,
      },
      total: {
        type: DataTypes.DECIMAL(10, 2),
      },
    });
  
    return Order;
  };