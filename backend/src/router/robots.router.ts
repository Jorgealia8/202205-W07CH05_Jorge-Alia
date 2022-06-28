import { Router } from 'express';
import { RobotController } from '../controllers/robot.controller.js';
import { loginRequired } from '../middleware/login-required.js';
import { Robot } from '../models/robots.model.js';

export const robotController = new RobotController(Robot);
export const robotRouter = Router();

robotRouter.get('/', robotController.getAllController);
robotRouter.get('/:id', robotController.getController);
robotRouter.post('/', loginRequired, robotController.postController);
robotRouter.patch('/:id', loginRequired, robotController.patchController);
robotRouter.delete('/:id', loginRequired, robotController.deleteController);
