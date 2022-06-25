import { MongooseController } from './controller.js';
import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

let req: Partial<Request>;
let resp: Partial<Response>;
let next: Partial<NextFunction> = jest.fn();

let mockItem = {
    find: jest.fn(),
    findById: jest.fn(),
    create: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
};
let newController = new MongooseController(
    mockItem as unknown as mongoose.Model<{}>
);
describe('Given a instantiated controller MongooseController', () => {
    beforeEach(() => {
        req = {
            params: { id: '1' },
        };
        resp = {
            setHeader: jest.fn(),
            status: jest.fn(),
            end: jest.fn(),
        };
    });
    describe('When method getAllController is called', () => {
        test('Then res.end should be called', async () => {
            const mockResult = [{ test: 'test' }];
            (mockItem.find as jest.Mock).mockResolvedValue(mockResult);
            await newController.getAllController(
                req as Request,
                resp as Response
            );
            expect(resp.end).toHaveBeenCalled();
        });
    });
    describe('When method getController is called', () => {
        test('Then res.end should be called', async () => {
            const mockResult = [{ test: 'test' }];
            (mockItem.findById as jest.Mock).mockResolvedValue(mockResult);
            await newController.getController(req as Request, resp as Response);
            expect(resp.end).toHaveBeenCalled();
        });
    });
    describe('When method getController is called with a null', () => {
        test('Then res.status toHaveBeenCalledWith 404 ', async () => {
            const mockResult = null;
            (mockItem.findById as jest.Mock).mockResolvedValue(mockResult);
            await newController.getController(req as Request, resp as Response);
            expect(resp.status).toHaveBeenCalledWith(404);
            expect(resp.end).toHaveBeenCalledWith(JSON.stringify({}));
        });
    });
    describe('When method postController is called', () => {
        test('Then res.end should be called', async () => {
            const mockResult = [{ test: 'test' }];
            (mockItem.create as jest.Mock).mockResolvedValue(mockResult);
            await newController.postController(
                req as Request,
                resp as Response,
                next as NextFunction
            );
            expect(resp.end).toHaveBeenCalled();
        });
    });

    describe('When method postController is called with a null', () => {
        test('Then next should be called', async () => {
            const mockResult = null;
            (mockItem.create as jest.Mock).mockRejectedValue(mockResult);
            await newController.postController(
                req as Request,
                resp as Response,
                next as NextFunction
            );
            expect(next).toHaveBeenCalled();
        });
    });

    describe('When method patchController is called', () => {
        test('Then res.end should be called', async () => {
            const mockResult = [{ test: 'test' }];
            (mockItem.findByIdAndUpdate as jest.Mock).mockResolvedValue(
                mockResult
            );
            await newController.patchController(
                req as Request,
                resp as Response
            );
            expect(resp.end).toHaveBeenCalled();
        });
    });
    describe('When method deleteController is called', () => {
        test('Then res.end is called', async () => {
            const mockResult = true;
            (mockItem.findByIdAndDelete as jest.Mock).mockResolvedValue(
                mockResult
            );
            await newController.deleteController(
                req as Request,
                resp as Response
            );
            expect(resp.end).toHaveBeenCalled();
        });
    });
    describe('When method deleteController is called', () => {
        test('Then res.end is called', async () => {
            const mockResult = false;
            (mockItem.findByIdAndDelete as jest.Mock).mockResolvedValue(
                mockResult
            );
            await newController.deleteController(
                req as Request,
                resp as Response
            );
            expect(resp.end).toHaveBeenCalled();
        });
    });
});
