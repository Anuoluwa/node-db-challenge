import express from 'express';
import router from './routes'

const server = express();
server.use(express.json());
server.use('/api', router);


server.get('/', (req, res) => {
  res.json('<h2>Welcome GTD API </h2>');
});

server.all('*', (req, res) => {
  res.json(`
      Sorry, no such route, try again!
    `);
});

export default server;
