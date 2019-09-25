import '@babel/polyfill';
import env from 'dotenv';
import http from 'http';
import app from './app';

env.config();
const port = process.env.PORT || 3000;
const server = http.createServer(app);

if (process.env.NODE_ENV === 'development') {
  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Application is running on http://localhost:${port}`);
  });
}

module.exports = app;
