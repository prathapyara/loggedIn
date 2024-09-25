// index.js
import express from 'express';
import db from './config/dbConfig.js';
import authRoutes from './routes/authRoutes.js';
import menuRoutes from './routes/menuRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);

// Error handling middleware
app.use(errorHandler);

// Database synchronization and server startup
db.sync().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running...');
  });
}).catch(err => console.error(err));
