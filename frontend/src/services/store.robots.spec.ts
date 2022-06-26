import { HttpStoreRobots } from './store.robots';

describe('Given HttpStoreRobots', () => {
    describe('When we instantiate', () => {
        describe('And we use method getRobots', () => {
            test('Then it should return a array of two robots', async () => {
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue([
                        // TODO cambiar por mock de personajes
                        {
                            id: 1,
                            name: 'Prueba 1',
                        },
                        {
                            id: 2,
                            name: 'Prueba 2',
                        },
                    ]),
                });
                const result = await new HttpStoreRobots().getRobots();
                expect(fetch).toBeCalled();
                expect(result.length).toBe(2);
            });
        });
    });
});
