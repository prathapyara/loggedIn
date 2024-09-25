// services/authService.js
import User from '../models/user.js';
import jwt from 'jsonwebtoken';

export const login = async (username, password) => {
  const user = await User.findOne({ where: { username } });
  if (!user || user.password !== password) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
  return token;
};
