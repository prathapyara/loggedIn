// models/User.js
// models/User.js
import { DataTypes } from 'sequelize';
import db from '../config/dbConfig.js';

const User = db.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
