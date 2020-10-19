const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','0ma3mdre3U', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;