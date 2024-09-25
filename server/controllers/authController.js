// controllers/authController.js
import * as authService from '../services/authService.js';

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const token = await authService.login(username, password);
    res.json({ token });
  } catch (error) {
    next(error);
  }
};
