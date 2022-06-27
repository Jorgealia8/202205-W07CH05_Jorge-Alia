import { Router } from 'express';
import { User } from '../models/user.model.js';
import mongoose from 'mongoose';
import { iAppModel } from '../models/app.model.js';
import { MongooseController } from '../controllers/controller.js';

export const userController = new MongooseController(
    User as unknown as iAppModel<mongoose.Schema>
);
export const userRouter = Router();

userRouter.get('/', userController.getAllController);
userRouter.get('/:id', userController.getController);
userRouter.post('/', userController.postController);
userRouter.patch('/:id', userController.patchController);
userRouter.delete('/:id', userController.deleteController);
