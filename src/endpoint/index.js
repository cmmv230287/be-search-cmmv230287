'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const handlerRouters =  require('./handlerRouter');

// App
const app = express();
//const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/handler', handlerRouters);

// Constants
const PORT = 4000;
const HOST = '127.0.0.1';

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
