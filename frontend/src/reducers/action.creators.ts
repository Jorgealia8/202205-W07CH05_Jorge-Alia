import { createAction } from '@reduxjs/toolkit';
import { iRobot } from '../models/robot';
import { actionTypes } from './action.types';

export const loadProductsAction = createAction<Array<iRobot>>(
    actionTypes['robot@load']
);

export const addProductAction = createAction<iRobot>(actionTypes['robot@load']);

export const updateProductAction = createAction<iRobot>(
    actionTypes['robot@load']
);

export const deleteProductAction = createAction<iRobot>(
    actionTypes['robot@load']
);
