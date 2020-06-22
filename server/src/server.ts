import express from 'express';
import path from 'path';
import routes from './routes';
import cors from 'cors';
import { errors } from 'celebrate';

const app = express();

app.use(cors({/*poderia inserir somente as URLs que teriam acesso à API*/}));
app.use(express.json());
app.use(routes);

app.use('/uploads' , express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);
