const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'QuadB',
  username: 'admin',
  password: 'Sooraj123Sooraj123',
  host: 'database-3.crmnjkpv6x2a.eu-north-1.rds.amazonaws.com',
  dialect: 'mysql',
  port:3306
});

module.exports = sequelize;
