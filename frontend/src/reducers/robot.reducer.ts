import { createReducer } from '@reduxjs/toolkit';
import { iRobot } from '../models/robot';
import * as action from './action.creators';

const initialState: Array<iRobot> = [];

export const robotReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(action.loadRobotsAction, (state, action) => [
            ...action.payload,
        ])
        .addCase(action.addRobotAction, (state, action) => [
            ...state,
            action.payload,
        ])
        .addCase(action.updateRobotAction, (state, action) =>
            state.map((item) =>
                item._id === action.payload._id ? action.payload : item
            )
        )
        .addCase(action.deleteRobotAction, (state, action) =>
            state.filter((item) => item._id !== action.payload._id)
        )
        .addDefaultCase((state) => state);
});
