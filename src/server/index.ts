import { Request, Response } from 'express';
const express = require('express');
const dotenv = require('dotenv').config();
import axios from 'axios';
var cors = require('cors');

const app = express();
app.use(cors());

app.get('/products', (req: Request, res: Response) => {
  axios('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products', {
    headers: {
      Authorization: process.env.API_KEY,
    },
  }).then((results) => {
    res.send(results.data);
  });
});

// get product info
app.get('/products/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  console.log('this is the product info route');
  console.log('id: ', id);
  axios(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}`, {
    headers: {
      Authorization: process.env.API_KEY,
    },
  }).then((results) => {
    console.log('results: ', results.data);
    res.send(results.data);
  });
});

// get related product id's
app.get('/products/:id/related', (req: Request, res: Response) => {
  const id = req.params.id;
  axios(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/related`,
    {
      headers: {
        Authorization: process.env.API_KEY,
      },
    }
  ).then((results) => {
    res.send(results.data);
  });
});

// get product styles
app.get('/products/:id/styles', (req: Request, res: Response) => {
  const id = req.params.id;
  axios(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/styles`,
    {
      headers: {
        Authorization: process.env.API_KEY,
      },
    }
  ).then((results) => {
    res.send(results.data);
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
