const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3001;
const app = express();
//parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
//allow express to access public files like css and js and images
app.use(express.static('public'));
//parse incoming json data
app.use(express.json());
const { animals } = require('./data/animals.json');

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);





app.listen(PORT, () => {
    console.log(`API SERVER IS NOW ON ${PORT}!`);
})

