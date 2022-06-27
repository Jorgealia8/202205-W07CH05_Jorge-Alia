import { iRobot } from '../models/robot';
import * as action from './action.creators';
import { robotReducer } from './robot.reducer';
import { AnyAction } from '@reduxjs/toolkit';

describe('Given robotReducer', () => {
    const mockRobot: iRobot = {
        _id: '1',
        name: 'Pedro',
        image: 'imageprobe',
        speed: 4,
        endurance: 9,
        creationDate: '12-03-2016',
        favorite: false,
    };
    const mockRobot2: iRobot = {
        _id: '3',
        name: 'Anastasio',
        image: 'imageprobe',
        speed: 7,
        endurance: 2,
        creationDate: '20-08-2026',
        favorite: false,
    };
    describe('When calling it whit action load with an array of Robot s', () => {
        test('Then it should return a new state witch the Products in the action payload', () => {
            //Arrange
            const initialSate: Array<iRobot> = [];
            const actionToTest = action.loadRobotsAction([mockRobot]);
            //Act
            const newState = robotReducer(initialSate, actionToTest);
            //Assert
            expect(newState).toHaveLength(1);
            expect(newState).toStrictEqual([mockRobot]);
        });
    });
    describe('When calling it whit action add product whit the new product as payload', () => {
        test('Receive a new state with the old state and the new product', () => {
            //Arrange
            const initialState: Array<iRobot> = [mockRobot];
            const newRobot = { ...mockRobot, _id: '34' };
            const acctionToTest = action.addRobotAction(newRobot);
            //Act
            const newState = robotReducer(initialState, acctionToTest);
            //Assert
            expect(newState).toHaveLength(2);
            expect(newState).toStrictEqual([mockRobot, newRobot]);
        });
    });
    describe('When calling it with action update with the update Product as payload', () => {
        test('Then it should return a new state witch the products update', () => {
            //Arrange
            const initialState: Array<iRobot> = [mockRobot, mockRobot2];
            const updatedRobot = { ...mockRobot, name: 'Alfonso' };
            const actionToTest = action.updateRobotAction(updatedRobot);
            //Act
            const newState = robotReducer(initialState, actionToTest);
            //Assert
            expect(newState).toHaveLength(2);
            expect(newState).toStrictEqual([updatedRobot, mockRobot2]);
        });
    });
    describe('When calling it with action delete for one product', () => {
        test('Then it should return a new state without this product', () => {
            //Arrange
            const initialState: Array<iRobot> = [mockRobot];
            const actionToTest = action.deleteRobotAction(mockRobot);
            //Act
            const newState = robotReducer(initialState, actionToTest);
            //Assert
            expect(newState).toHaveLength(0);
        });
    });
    describe('When calling it with none of the above', () => {
        test('The', () => {
            const initialState: Array<iRobot> = [mockRobot];
            const newState = robotReducer(initialState, {} as AnyAction);

            expect(newState).toStrictEqual(initialState);
        });
    });
});
