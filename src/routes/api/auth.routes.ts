import express from 'express';
import authController from '../../controllers/auth.controller';

const authRoutes = express.Router();

authRoutes.post('/register', authController.register);
authRoutes.post('/login');
authRoutes.post('/logout');
authRoutes.get('/refresh');

export default authRoutes;
