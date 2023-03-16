import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import * as path from 'path';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(
  '/fact',
  createProxyMiddleware({
    target: 'https://catfact.ninja',
    secure: true,
    changeOrigin: true
  })
);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
