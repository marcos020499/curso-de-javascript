import express from 'express';
const app = express();
import lentes from './routes/lentes';
import usuarios from './routes/usuarios';
import ventas from './routes/ventas';
import bodyParser from 'body-parser';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/lentes', lentes);
app.use('/usuarios', usuarios);
app.use('/ventas', ventas);

export default app;
