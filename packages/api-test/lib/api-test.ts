import tester from 'log';
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  tester.info('API request received');
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});