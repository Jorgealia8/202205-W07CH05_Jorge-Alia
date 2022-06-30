// import request from 'supertest';
// import { app } from '../app.js';
// import { initDB } from '../db/init.db.js';
// import { mongooseConnect } from '../db/mongoose.js';
// import { server } from '../index.js';
// import * as aut from '../services/authorization.js';

// describe('Given the routes of "/robot" ', () => {
//     let connect: typeof import('mongoose');
//     let data: { [key: string]: Array<any> };
//     let token;
//     beforeEach(async () => {
//         connect = await mongooseConnect();
//         await initDB();
//         token = aut.createToken({
//             id: '',
//         });
//     });

//     afterEach(async () => {
//         connect.disconnect();
//     });

//     describe('When method GET is used', () => {
//         test('If I am not logged, then status should be 401', async () => {
//             const response = await request(app)
//                 .get('/robot/')
//                 .set('Authorization');
//             expect(response.statusCode).toBe(401);
//         });
//     });
// });
