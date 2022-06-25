import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { aMenuItems } from '../../models/menu-items';
import OfferPage from '../../pages/offerPage';
import SneakerPage from '../../pages/sneakersPage';
import TshirtsPage from '../../pages/tshirtsPage';
import { Header } from './header';

describe('Given the component Header', () => {
    const options: aMenuItems = [
        { path: '', label: 'Offer', page: <OfferPage /> },
        { path: 'Sneakers', label: 'Sneakers', page: <SneakerPage /> },
        { path: 'T-shirts', label: 'T-shirts', page: <TshirtsPage /> },
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
