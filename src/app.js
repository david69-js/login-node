const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/routes')
const cors = require("cors");
const app = express();
require('dotenv').config({ path: 'prod.env' });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
app.use(cors({
  origin: port,
  credentials: true,
}))

//app.use(route)
app.use('/api', routes)

module.exports = app;
