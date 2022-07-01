import request from 'supertest';
import { server } from '../index.js';
import { app } from '../app.js';
import { initDB } from '../db/init.db.js';
import { mongooseConnect } from '../db/mongoose.js';
import * as aut from '../services/authorization';
import { iRobots } from '../models/robots.model.js';

describe('Given the routes of "/robot" ', () => {
    let data: { [key: string]: Array<any> };
    let token: string;
    beforeEach(async () => {
        data = await initDB();
        await mongooseConnect();
        token = aut.createToken({
            id: data.users[0].id,
            name: data.users[0].name,
        });
    });

    afterEach(async () => {
        server.close();
    });

    describe('When method GET is used', () => {
        test('If I am not logged, then status should be 401', async () => {
            const response = await request(app).get('/robot/');
            expect(response.statusCode).toBe(401);
        });

        test('If I am logged, then status should be 200', async () => {
            const response = await request(app)
                .get('/robot/')
                .set('Authorization', 'Bearer ' + token);
            expect(response.statusCode).toBe(200);
        });
    });

    // describe('When method GET is used in "/:id" route', () => {
    //     test('If I am not logged, then status should be 401', async () => {
    //         const response = await request(app).get(
    //             `/robot/${data.robots[0].id}`
    //         );
    //         expect(response.statusCode).toBe(401);
    //     });
    // });

    // describe('POST', () => {
    //     test('If I am logged, then status should be 201', async () => {
    //         const newRobot: iRobots = {
    //             name: 'PRUEBA',
    //             image: 'prueba',
    //             speed: 2,
    //             endurance: 6,
    //             creationDate: '01-03-2021',
    //             favorite: false,
    //             pilot: data.users[0].id,
    //         };
    //         const response = await request(app)
    //             .post('/robot/')
    //             .set('Authorization', 'Bearer ' + token)
    //             .send(newRobot);
    //         expect(response.statusCode).toBe(201);
    //     });
    // });
});
