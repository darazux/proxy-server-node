// index.js

const express = require('express');
const app = express();
const PROXY_PORT = 5000;
const { createProxyMiddleware } = require('http-proxy-middleware');

app.get('/', (req, res) => {
  res.send('This is my proxy server');
});

app.use('/corona-tracker-world-data', (req, res, next) => {
  createProxyMiddleware({
    target: 'https://xxx.com',
    changeOrigin: true,
    pathRewrite: {
      [`^/corona-tracker-world-data`]: '',
    },
  })(req, res, next);
});

app.listen(PROXY_PORT, () => {
  console.log(`Listening on localhost port ${PROXY_PORT}`);
});