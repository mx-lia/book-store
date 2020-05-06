const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const passport = require('passport');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const serverConfig = require("./config/server-config");
const customerRouter = require("./routes/customer-router");
const bookRouter = require("./routes/book-router");
const genreRouter = require("./routes/genre-router");

app.use(passport.initialize());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

require('./middlewares/jwt-auth');
require('./middlewares/google-auth');

app.use(customerRouter);
app.use(bookRouter);
app.use(genreRouter);

app.listen(serverConfig.PORT);