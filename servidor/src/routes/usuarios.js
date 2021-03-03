import express from 'express';
import { borrar, listar, crear, editar, filtrar } from '../controllers/usuarios';
import { validator } from '../middlewares/validation';
const app = express();
// import { validator } from '../middlewares/validation';
import { UsersEditValidationSchema, UsersCreateValidationSchema } from '../schemas/usuarios';

app.get('/listar', listar);
app.post('/crear', validator(UsersEditValidationSchema), crear);

app.delete('/borrar/:id', validator(UsersCreateValidationSchema), borrar);
app.get('/filtrar/:id', filtrar);
app.put('/editar', editar);

export default app;
