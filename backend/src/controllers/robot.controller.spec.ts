import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { User } from '../models/user.model.js';
import { RobotController } from './robot.controller.js';

describe('Given a instantiated controller Robot Controller whit model Robot injected', () => {
    let req: Partial<Request>;
    let resp: Partial<Response>;
    let next: NextFunction;

    let mockModel = {
        find: jest.fn().mockReturnValue({ populate: jest.fn() }),
        findById: jest.fn().mockReturnValue({ populate: jest.fn() }),
        create: jest.fn(),
    };
    let controller = new RobotController(
        mockModel as unknown as mongoose.Model<{}>
    );
    beforeEach(() => {
        req = {
            params: { id: '62b9e534a202c8a096e0d7ba' },
            body: { user: '62bb10cb54f3a58a2faa20c5' },
        };
        resp = {
            setHeader: jest.fn(),
            status: jest.fn(),
            send: jest.fn(),
        };
        next = jest.fn();
    });
    describe('When method getAllController is called', () => {
        test('Then res.send should be called', async () => {
            await controller.getAllController(req as Request, resp as Response);
            expect(resp.send).toHaveBeenCalled();
        });
    });
    describe('When method getController is called', () => {
        test('Then res.send should be called', async () => {
            await controller.getController(
                req as Request,
                resp as Response,
                next
            );
            expect(resp.send).toHaveBeenCalled();
        });
    });
    describe('When method postController is called', () => {
        test('Then if not error resp.send should be called with data', async () => {
            const mockResult = {
                robot: '62b5d4943bc55ff0124f6c1d',
                save: jest.fn(),
            };
            req = { body: { user: '62b9e534a202c8a096e0d7ba' } };
            (User.findById as jest.Mock).mockResolvedValue(mockResult);
            (mockModel.create as jest.Mock).mockResolvedValue(mockResult);
            await controller.postController(
                req as Request,
                resp as Response,
                next as NextFunction
            );
            expect(resp.send).toHaveBeenCalledWith(JSON.stringify(mockResult));
        });
    });
});
