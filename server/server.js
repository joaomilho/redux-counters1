import express from 'express';
import render from './render'

express()
  .use('/static', express.static('static'))
  .get('/', (req, res) => res.type('html').send(render()))
  .listen(3000, 'localhost', () => console.log('API listening at http://localhost:3000'));
