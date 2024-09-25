// models/Menu.js
import { DataTypes } from 'sequelize';
import db from '../config/dbConfig.js';

const Menu = db.define('Menu', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Menu;
