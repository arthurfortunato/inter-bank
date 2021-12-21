import { Router } from 'express';
import { UserController } from '../controllers/user.controller'
import { userAuthenticated } from '../middlewares/userAuthenticated';

export const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/signin', userController.signin)
userRoutes.post('/signup', userController.signup)
userRoutes.get('/me', userAuthenticated, userController.getUser)
