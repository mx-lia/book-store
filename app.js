const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const serverConfig = require("./config/server-config");

const customerRouter = require("./routes/customer-router");
const bookRouter = require("./routes/book-router");
const genreRouter = require("./routes/genre-router");
const publisherRouter = require("./routes/publisher-router");
const authorRouter = require("./routes/author-router");
const orderRouter = require("./routes/order-router");

app.use(passport.initialize());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload());

require("./middlewares/jwt-auth");
require("./middlewares/google-auth");

app.use(customerRouter);
app.use(bookRouter);
app.use(genreRouter);
app.use(publisherRouter);
app.use(authorRouter);
app.use(orderRouter);

app.listen(serverConfig.PORT);
