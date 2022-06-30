import { iRobots, Robot } from '../models/robots.model.js';
import { iUser, User } from '../models/user.model.js';
import { encrypt } from '../services/authorization.js';
import { mongooseConnect } from './mongoose.js';

let aUsers: Array<iUser> = [
    {
        name: 'Pepe',
        passwd: '1234',
        email: 'pepe@sample.com',
        robots: [],
    },
    {
        name: 'Luis',
        passwd: '1234',
        email: 'luis@sample.com',
        robots: [],
    },
];

let aRobots: Array<iRobots> = [
    {
        name: 'robot1',

        image: 'prueba',
        endurance: 6,
        creationDate: '01-03-2021',
        speed: 3,
        favorite: false,
        pilot: null,
    },
    {
        name: 'robot2',
        image: 'prueba',
        endurance: 6,
        creationDate: '01-03-2021',
        speed: 3,
        favorite: false,
        pilot: null,
    },
];

export const initDB = async () => {
    const connect = await mongooseConnect();
    aUsers = await Promise.all(
        aUsers.map(async (item) => ({
            ...item,
            passwd: await encrypt(item.passwd),
        }))
    );

    const users = await User.insertMany(aUsers);
    aRobots[0].pilot = users[0].id;
    aRobots[1].pilot = users[1].id;
    const robots = await Robot.insertMany(aRobots);

    let finalUsers = [];
    for (let i = 0; i < users.length; i++) {
        const item = users[i];
        finalUsers[i] = await User.findByIdAndUpdate(
            item.id,

            { ...item, robots: [robots[i].id] },
            { new: true }
        );
    }

    console.log(finalUsers);
    connect.disconnect();
};
