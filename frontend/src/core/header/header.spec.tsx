import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { aMenuItems } from '../../models/menu-items';
import HomePage from '../../pages/homePage';

import { Header } from './header';

describe('Given the component Header', () => {
    const options: aMenuItems = [
        { path: '', label: 'Home', page: <HomePage /> },
    ];
    describe('When calling it', () => {
        test('Render Header', () => {
            render(
                <BrowserRouter>
                    <Header options={options} />
                </BrowserRouter>
            );
            const result = screen.getByText(/Bienvenido/i);
            expect(result).toBeInTheDocument();
        });
    });
});
