import { createReducer } from '@reduxjs/toolkit';
import { iRobot } from '../models/robot';
import * as action from './action.creators';

const initialState: Array<iRobot> = [];

export const robotReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(action.loadProductsAction, (state, action) => [
            ...action.payload,
        ])
        .addCase(action.addProductAction, (state, action) => [
            ...state,
            action.payload,
        ])
        .addCase(action.updateProductAction, (state, action) =>
            state.map((item) =>
                item.id === action.payload.id ? action.payload : item
            )
        )
        .addCase(action.deleteProductAction, (state, action) =>
            state.filter((item) => item.id !== action.payload.id)
        )
        .addDefaultCase((state) => state);
});
