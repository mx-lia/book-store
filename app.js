const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const serverConfig = require('./config/server-config');
const router = require('./routes/router');
const error = require('./middlewares/error');

app.use(bodyParser.json());
app.use(router);
app.use(error);

app.listen(serverConfig.PORT);