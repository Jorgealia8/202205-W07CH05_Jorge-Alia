import mongoose from 'mongoose';
import { mongooseConnect, RelationField } from '../db/mongoose.js';

(async () => {
    await mongooseConnect();
})();

export interface iRobots {
    id: string;
    name: string;
    image: string;
    speed: number;
    endurance: number;
    creationDate: string;
    favorite: boolean;
    pilot: RelationField;
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
    favorite: { type: mongoose.SchemaTypes.Boolean, default: false },
    pilot: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
    },
});

robotSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.__v;
    },
});

export const Robot = mongoose.model('Robot', robotSchema);
