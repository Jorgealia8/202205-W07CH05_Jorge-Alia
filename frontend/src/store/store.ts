import { configureStore } from '@reduxjs/toolkit';
import { iRobot } from '../models/robot';
import { robotReducer } from '../reducers/robot.reducer';

export interface iState {
    robots: Array<iRobot>;
}

const preloadedState = {
    robots: [],
};
export const stroe = configureStore({
    reducer: {
        robots: robotReducer,
    },
    preloadedState,
});
