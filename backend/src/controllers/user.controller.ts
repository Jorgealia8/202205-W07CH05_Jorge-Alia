import { NextFunction, Request, Response } from 'express';
import { HydratedDocument, Model } from 'mongoose';

import { MongooseController } from './controller.js';
import * as aut from '../services/authorization.js';
import { iTokenPayload } from '../interfaces/token.js';

export class UserController<T> extends MongooseController<T> {
    constructor(public model: Model<T>) {
        super(model);
    }

    getAllController = async (req: Request, resp: Response) => {
        req;
        resp.setHeader('Content-type', 'application/json');
        resp.send(
            await this.model.find().populate('robots', {
                pilot: 0,
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
                .populate('robots', {
                    responsible: 0,
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
        let newItem: HydratedDocument<any>;
        try {
            req.body.passwd = await aut.encrypt(req.body.passwd);
            newItem = await this.model.create(req.body);
        } catch (error) {
            next(error);
            return;
        }
        resp.setHeader('Content-type', 'application/json');
        resp.status(201);
        resp.send(JSON.stringify(newItem));
    };

    loginController = async (
        req: Request,
        resp: Response,
        next: NextFunction
    ) => {
        const findUser: any = await this.model.findOne({ name: req.body.name });
        if (!findUser || !aut.compare(req.body.passwd, findUser.passwd)) {
            const error = new Error('Invalid user or password');
            error.name = 'UserAuthorizationError';
            next(error);
            return;
        }
        const tokenPayLoad: iTokenPayload = {
            id: findUser.id,
            name: findUser.name,
        };
        const token = aut.createToken(tokenPayLoad);
        resp.setHeader('Content-type', 'application/json');
        resp.status(201);
        resp.send(JSON.stringify({ token, id: findUser.id }));
    };
}
