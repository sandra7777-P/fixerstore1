const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING
  },
  surname: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.INTEGER
  },
  address: {
    type: DataTypes.TEXT
  },
  neighborhood: {
    type: DataTypes.STRING
  },
  department: {
    type: DataTypes.STRING
  },
  country_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Country',
      key: 'id'
    }
  }
});

User.belongsTo(Country, { foreignKey: 'country_id' });

module.exports = User;
