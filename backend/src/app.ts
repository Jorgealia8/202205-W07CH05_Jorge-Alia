import express from 'express';
import morgan from 'morgan';
import { routerHome } from './router/home.js';
import { robotRouter } from './router/robots.js';

export const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/', routerHome);
app.use('/robots', robotRouter);
