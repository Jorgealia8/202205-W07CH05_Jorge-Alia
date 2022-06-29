// import { connection } from 'mongoose';
// import { iRobots } from '../models/robots.model.js';
// import { iUser, User } from '../models/user.model.js';
// import { encrypt } from '../services/authorization.js';
// import { mongooseConnect } from './mongoose.js';

// const users: Array<iUser> = [
//     {
//         name: 'Pepe',
//         passwd: '1234',
//         email: 'pepe@sample.com',
//         robots: [],

//     },
//     {
//         name: 'Luis',
//         passwd: '1234',
//         email: 'luis@sample.com',
//         robots: [],
//     },
// ];

// const robots: Array<iRobots> = [
//     {
//         name: 'robot1',

//         image: 'prueba',
//         endurance: 6,
//         creationDate: '01-03-2021',
//         speed: 3,
//         favorite: false,
//         pilot: null,
//     },
//     {
//         name: 'robot2',
//         image: 'prueba',
//         endurance: 6,
//         creationDate: '01-03-2021',
//         speed: 3,
//         favorite: false,
//         pilot: null,
//     },
// ];

// async () => {
//     const connect = await mongooseConnect();
//     users.map(async (item) => ({ item, passwd: await encrypt(item.passwd) }));

//     const user = await User.insertMany(users);
//     aRobots[0].pilot = users[0].id;
//     aRobots[1].pilot = users[1].id;

//     connect.disconnect();
// };
