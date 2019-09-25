import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import routes from './routes';

const expressApp = express();

expressApp.use(bodyParser.json());
expressApp.use(expressValidator());
const app = routes(expressApp);

app.use('/', (req, res) => {
  res.status(200)
    .json({
      message: 'Express cloud function',
    });
});

export default app;
