// routes/userRoutes.js
import express from 'express';
import { authenticate } from '../middleware/authMiddleware.js';
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', authenticate, getUsers);
router.post('/', authenticate, createUser);
router.get('/:id', authenticate, getUserById);
router.put('/:id', authenticate, updateUser);
router.delete('/:id', authenticate, deleteUser);

export default router;
