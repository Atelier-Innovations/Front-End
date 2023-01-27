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

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});