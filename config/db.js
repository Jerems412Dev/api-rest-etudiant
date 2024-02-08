const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dbetudiantnodejs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;