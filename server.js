// setting global variables 
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// initialize app and set a port for listening
const app = express();
const PORT = process.env.PORT || 3001;

// calling on the app to be able to use the data provided in json files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// allows app to use the local js files
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// starts the server on the designated port on line 8
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
