const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const passport = require('passport');
const cors = require("cors");
const serverConfig = require("./config/server-config");
const router = require("./routes/router");
const error = require("./middlewares/error");

app.use(passport.initialize());

require('./middlewares/jwt-auth');
require('./middlewares/google-auth');

app.use(cors());
app.use(bodyParser.json());
app.use(router);
app.use(error);

app.listen(serverConfig.PORT);