const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// routes for API (JSON) and HTML
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse JSON data
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Note Taker API server now on port ${PORT}!`);
  });