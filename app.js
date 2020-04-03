const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const serverConfig = require('./config/server-config');
const router = require('./routes/router');

app.use(bodyParser.json());
app.use(router);

app.listen(serverConfig.PORT);