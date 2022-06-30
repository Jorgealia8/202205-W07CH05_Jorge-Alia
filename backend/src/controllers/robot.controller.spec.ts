import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { RobotController } from './robot.controller.js';

describe('Given a instantiated controller Robot Controller whit model Robot injected', () => {
    let req: Partial<Request>;
    let resp: Partial<Response>;
    let next: NextFunction;
    let mockPopulate = jest.fn();

    let mockModel = {
        find: jest.fn().mockReturnValue({ populate: jest.fn() }),
        findById: jest.fn().mockReturnValue({ populate: jest.fn() }),
    };
    let controller = new RobotController(
        mockModel as unknown as mongoose.Model<{}>
    );
    beforeEach(() => {
        req = {
            params: { id: '62bb10cb54f3a58a2faa20c5' },
            body: { pilot: '62bb10cb54f3a58a2faa20c5' },
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
});
