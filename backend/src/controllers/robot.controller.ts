import { NextFunction, Request, Response } from 'express';
import { Model } from 'mongoose';
import { iRobots } from '../models/robots.model.js';
import { MongooseController } from './controller.js';
import { User } from '../models/user.model.js';

export class RobotController<T> extends MongooseController<T> {
    constructor(public model: Model<T>) {
        super(model);
    }

    getAllController = async (req: Request, resp: Response) => {
        req;
        resp.setHeader('Content-type', 'application/json');
        resp.send(
            await this.model.find().populate('pilot', {
                robots: 0,
            })
        );
    };

    postController = async (
        req: Request,
        resp: Response,
        next: NextFunction
    ) => {
        try {
            const newRobot = await this.model.create(req.body);
            const user = await User.findById(req.body.pilot);
            if (!user) {
                throw new Error('User not found');
            }
            user.robots = [...(user.robots as Array<iRobots>), newRobot.id];
            user.save();
            resp.setHeader('Content-type', 'application/json');
            resp.status(201);
            resp.send(JSON.stringify(newRobot));
        } catch (error) {
            next(error);
        }
    };
}
