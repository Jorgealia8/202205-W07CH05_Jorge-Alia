import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '../utils/testutils';
import { iState, store } from '../store/store';

import { iRobot } from '../models/robot';
import HomePage from './homePage';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
}));

const mockRobots: Array<iRobot> = [
    {
        _id: '62b5e12881f6e06e050a07ee',
        name: 'Alberto',
        image: 'prueb',
        speed: 2,
        endurance: 6,
        creationDate: '01-03-2021',
        favorite: false,
    },
    {
        _id: '62b5e16081f6e06e050a07f0',
        name: 'Ovidio',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yE1usE8zILZ12uD_bZXqJBQUofd3TLJUxg&usqp=CAU',
        speed: 7,
        endurance: 5,
        creationDate: '12-08-2020',
        favorite: false,
    },
];

describe('Given the component Home', () => {
    describe('When calling it', () => {
        beforeEach(() => {
            (useSelector as jest.Mock).mockImplementation(() => mockRobots);
        });
        test('Then it should render', () => {
            const preloadedState: iState = {
                robots: [] as Array<iRobot>,
            };
            render(
                <BrowserRouter>
                    <HomePage></HomePage>
                </BrowserRouter>,
                { preloadedState, store }
            );
            const newResult = screen.getByText(/Lista/i);
            expect(newResult).toBeInTheDocument();
        });
    });
});
