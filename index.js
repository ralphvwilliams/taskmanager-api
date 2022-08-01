import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/index.js';
import 'dotenv/config';

const app = express();
const port = 8080;

mongoose
  .connect(process.env.DB_URL)
  .then((res) => {
    console.log('DB Connected');
  })
  .catch((error) => {
    console.log(error.name);
  });

app.use(express.json());

app.get('/', (req, res) => {
  res.send('This is our page');
});

app.use(routes);

app.listen(port, () => {
  console.log(`This application has started on http://localhost:${port}`);
});
