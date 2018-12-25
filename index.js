const express = require('express');
const PORT = process.env.PORT || 3001;
const knex = require('./db/knex/knex.js');
const bodyParser = require('body-parser');
const routes = require('./db/routes');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});