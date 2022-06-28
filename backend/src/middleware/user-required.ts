import { NextFunction, Request, Response } from 'express';
import { ExtRequest } from '../interfaces/token';
import { Robot } from '../models/robots.model';

export const userRequired = async (
    req: Request,
    resp: Response,
    next: NextFunction
) => {
    const userID = (req as unknown as ExtRequest).tokenPayload.id; // userRequired

    req.params.id; // Recurso ID
    const findRobot = await Robot.findById(req.params.id);
    if (findRobot?.pilot === userID) {
        next();
    } else {
        const error = new Error();
        error.name = 'UserAuthorizationError';
        next(error);
    }
};
