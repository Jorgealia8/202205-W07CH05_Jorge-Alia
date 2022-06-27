import { Model } from 'mongoose';
import { MongooseController } from './controller';

export class UserController<T> extends MongooseController<T> {
    constructor(public model: Model<T>) {
        super(model);
    }
}
