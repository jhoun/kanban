require('dotenv').config({ path: '../.env' })
const express = require('express');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});