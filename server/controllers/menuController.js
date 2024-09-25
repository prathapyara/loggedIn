// controllers/menuController.js
import * as menuService from '../services/menuService.js';

export const getMenu = async (req, res, next) => {
  try {
    const menu = await menuService.getMenu(req.user.role);
    res.json(menu);
  } catch (error) {
    next(error);
  }
};
