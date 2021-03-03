import express from 'express';
const app = express();

app.get('/editar', (req, res) => {
  res.send(nombrevariable);
});

app.get('/borrar', (req, res) => {
  res.send('hola mundo desde /lentes/borrar');
});

app.get('/filtrar', (req, res) => {
  res.send('hola mundo desde /lentes/filtrar');
});

export default app;
