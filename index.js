import express from 'express';
import routes from './routes/index.js';

const app = express();
const port = 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('This is our page');
});

app.use(routes);

app.listen(port, () => {
  console.log(`This application has started on http://localhost:${port}`);
});
