import { NextFunction, Request, Response } from 'express';
import { UserController } from './user.controller';
import { iUser, User } from '../models/user.model.js';

let controller: UserController<iUser>;
let req: Partial<Request>;
let resp: Partial<Response>;
let next: Partial<NextFunction> = jest.fn();

describe('Given a instantiated controller UserController', () => {
    beforeEach(() => {
        req = {
            params: { id: '1' },
        };
        resp = {
            setHeader: jest.fn(),
            status: jest.fn(),
            send: jest.fn(),
        };
        next = jest.fn();
        controller = new UserController(User) as any;
    });
    describe('When method getAllController is called', () => {
        test('Then res.send should be called', async () => {
            User.find = jest.fn().mockReturnValue({
                populate: jest.fn().mockResolvedValue({ user: 'test' }),
            });
            await controller.getAllController(req as Request, resp as Response);
            expect(User.find).toHaveBeenCalled();
            expect(resp.send).toHaveBeenCalledWith({ user: 'test' });
        });
    });
    describe('When method getController is called', () => {
        test('Then res.send should be called', async () => {
            const result = { test: 'test' };
            User.findById = jest.fn().mockResolvedValue(result);
            await controller.getController(
                req as Request,
                resp as Response,
                next as NextFunction
            );
            expect(resp.send).toHaveBeenCalledWith(JSON.stringify(result));
        });
    });
});
