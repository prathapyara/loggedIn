// routes/menuRoutes.js
import express from 'express';
import { getMenu } from '../controllers/menuController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authenticate, getMenu);

export default router;
