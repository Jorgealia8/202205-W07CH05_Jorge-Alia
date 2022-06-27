import { HttpStoreRobots } from './store.robots';

describe('Given HttpStoreRobots', () => {
    describe('When we instantiate', () => {
        describe('And we use method getRobots', () => {
            test('Then it should return a array of two robots', async () => {
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue([
                        // TODO cambiar por mock de personajes
                        {
                            _id: 1,
                            name: 'Prueba 1',
                        },
                        {
                            _id: 2,
                            name: 'Prueba 2',
                        },
                    ]),
                });
                const result = await new HttpStoreRobots().getRobots();
                expect(fetch).toBeCalled();
                expect(result.length).toBe(2);
            });
        });
        describe('And we use method getRobot', () => {
            test('Then it should return a robot', async () => {
                // arrange
                const robot_id = '1';
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest
                        .fn()
                        .mockResolvedValue({ name: 'test', _id: robot_id }),
                });
                // act
                const result = await new HttpStoreRobots().getRobot(robot_id);
                // assert
                expect(fetch).toBeCalled();
                expect(result._id).toBe('1');
            });
        });
        describe('And we use method setRobot', () => {
            test('should first', async () => {
                const robot = {
                    _id: '62b5e12881f6e06e050a07ee',
                    name: 'Alberto',
                    image: 'test',
                    speed: 2,
                    endurance: 6,
                    creationDate: '01-03-2021',
                    favorite: false,
                };
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue({
                        _id: '62b5e12881f6e06e050a07ee',
                        name: 'Alberto',
                        image: 'test',
                        speed: 2,
                        endurance: 6,
                        creationDate: '01-03-2021',
                        favorite: false,
                    }),
                });
                const result = await new HttpStoreRobots().setRobot(robot);
                // assert
                expect(fetch).toBeCalled();
                expect(result._id).toBe('62b5e12881f6e06e050a07ee');
            });
        });
        describe('And we use method updateRobot', () => {
            test('Then it should return the updated robot', async () => {
                const robot = {
                    _id: '62b5e12881f6e06e050a07ee',
                    name: 'Alberto',
                    image: 'test',
                    speed: 2,
                    endurance: 6,
                    creationDate: '01-03-2021',
                    favorite: false,
                };
                global.fetch = jest.fn().mockResolvedValue({
                    json: jest.fn().mockResolvedValue({
                        _id: '62b5e12881f6e06e050a07ee',
                        name: 'Alberto',
                        image: 'test',
                        speed: 2,
                        endurance: 6,
                        creationDate: '01-03-2021',
                        favorite: false,
                    }),
                });
                const result = await new HttpStoreRobots().updateRobot(robot);
                // assert
                expect(fetch).toBeCalled();
                expect(result._id).toBe('62b5e12881f6e06e050a07ee');
            });
        });
        describe('And we use method deleteRobot', () => {
            test('Then it should return a status ok', async () => {
                // arrange
                const deleteId = '62b5e12881f6e06e050a07ee';
                global.fetch = jest.fn().mockResolvedValue({
                    status: 200,
                });
                // act
                const result = await new HttpStoreRobots().deleteRobot(
                    deleteId
                );
                expect(fetch).toBeCalled();
                expect(result).toBe(200);
            });
        });
    });
});
