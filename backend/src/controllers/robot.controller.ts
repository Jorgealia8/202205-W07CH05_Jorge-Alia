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
    getController = async (
        req: Request,
        resp: Response,
        next: NextFunction
    ) => {
        resp.setHeader('Content-type', 'application/json');
        let result;
        try {
            result = await this.model
                .findById(req.params.id)
                .populate('pilot', {
                    robots: 0,
                });
        } catch (error) {
            next(error);
            return;
        }
        if (result) {
            resp.send(JSON.stringify(result));
        } else {
            resp.status(404);
            resp.send(JSON.stringify({}));
        }
    };

    postController = async (
        req: Request,
        resp: Response,
        next: NextFunction
    ) => {
        try {
            let user;
            try {
                user = await User.findById(req.body.pilot);
            } catch (error) {
                next(error);
                return;
            }
            if (!user) {
                const error = new Error('User not found');
                error.name = 'UserError';
                throw error;
            }
            const newRobot = await this.model.create(req.body);

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
