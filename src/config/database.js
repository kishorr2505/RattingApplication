const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('store_rating_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
