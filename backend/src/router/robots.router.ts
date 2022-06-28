import { Router } from 'express';
import { RobotController } from '../controllers/robot.controller.js';
import { Robot } from '../models/robots.model.js';
import { loginRequired } from '../middleware/login-required.js';

export const robotController = new RobotController(Robot);
export const robotRouter = Router();

robotRouter.get('/', loginRequired, robotController.getAllController);
robotRouter.get('/:id', loginRequired, robotController.getController);
robotRouter.post('/', loginRequired, robotController.postController);
robotRouter.patch('/:id', loginRequired, robotController.patchController);
robotRouter.delete('/:id', loginRequired, robotController.deleteController);
