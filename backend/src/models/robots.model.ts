import mongoose from 'mongoose';
import { mongooseConnect } from '../db/mongoose.js';

await mongooseConnect();

export interface iRobots {
    id: string;
    name: string;
    image: string;
    speed: number;
    endurance: number;
    creationDate: string;
}

const robotSchema = new mongoose.Schema({
    name: { type: mongoose.SchemaTypes.String, required: true },
    image: { type: mongoose.SchemaTypes.String, required: true },
    speed: {
        type: mongoose.SchemaTypes.Number,
        required: true,
        min: 0,
        max: 10,
    },
    endurance: {
        type: mongoose.SchemaTypes.Number,
        required: true,
        min: 0,
        max: 10,
    },
    creationDate: mongoose.SchemaTypes.String,
});

export const Robot = mongoose.model('Robot', robotSchema);