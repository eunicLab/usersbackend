import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from HomePage'));

app.use(function (req, res) {
  res.status(404).send(' 404: Sorry, Page Not Found!');
});

export default app;
