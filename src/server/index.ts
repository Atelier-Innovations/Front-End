import {Request, Response} from 'express';
const express = require('express');
const dotenv = require('dotenv').config();
import axios from 'axios';

const app = express();

app.get('/products', (req: Request, res: Response) => {
  axios('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products', {
    headers: {
      Authorization: process.env.API_KEY
    }
  })
  .then(results => {
    res.send(results.data)
  })
})

// body, name, email, product_id  of question answering user
// /qa/questions?product_id=37311. // use http not https
app.get('/qa/questions', (req: Request, res: Response) => {
  console.log(req.body);
  // res.send('hello');
  axios('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=37311', {
    headers: {
      Authorization: process.env.API_KEY,
    }
  })
  .then((results) => {
    console.log('this is results', results.data);
    res.json(results.data);
  })
})


app.post('/qa/questions', (req: Request, res: Response) => {
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=37311', {
    headers: {
      Authorization: process.env.API_KEY,
    }
  })
  .then((results) => {
    console.log('this is results', results.data);
    res.json(results.data);
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});