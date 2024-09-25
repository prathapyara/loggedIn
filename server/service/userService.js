// services/userService.js
import User from '../models/user.js';

export const getAllUsers = async () => {
  return await User.findAll();
};

export const createUser = async (userData) => {
  return await User.create(userData);
};

export const getUserById = async (id) => {
  return await User.findByPk(id);
};

export const updateUser = async (id, userData) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error('User not found');
  return await user.update(userData);
};

export const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error('User not found');
  await user.destroy();
};
