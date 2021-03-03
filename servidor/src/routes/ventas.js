import express from 'express';
const app = express();

app.get('/crear', (req, res) => {
  res.send('hola mundo desde /lentes/crear');
});

export default app;
