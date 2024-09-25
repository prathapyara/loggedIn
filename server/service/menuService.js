// services/menuService.js
import Menu from '../models/menu.js';

export const getMenu = async (role) => {
  const menus = await Menu.findAll({ where: { role } });
  return menus;
};
