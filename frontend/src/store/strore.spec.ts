import { store } from './store';

describe('Given store', () => {
    describe('When it calling it', () => {
        test('Then the call is true', () => {
            expect(store).toBeTruthy();
        });
    });
});
