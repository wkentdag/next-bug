const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();

  server.get('/about', (req, res) => {
    const actualPage = '/';
    const queryParams = { activeSection: 'about' };
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/shows', (req, res) => {
    const actualPage = '/';
    const queryParams = { activeSection: 'shows' };
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/gallery', (req, res) => {
    const actualPage = '/';
    const queryParams = { activeSection: 'gallery' };
    app.render(req, res, actualPage, queryParams);
  });

  server.get('/store', (req, res) => {
    const actualPage = '/';
    const queryParams = { activeSection: 'store' };
    app.render(req, res, actualPage, queryParams);
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
})
.catch((err) => {
  console.error(err.stack);
  process.exit(1);
});
