// setting global variables 
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// initialize app and set a port for listening
const app = express();
const PORT = process.env.PORT || 3001;

