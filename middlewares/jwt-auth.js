const passport = require("passport");

const localStrategy = require("passport-local").Strategy;

const JWTStrategy = require("passport-jwt").Strategy;
const JWT_SECRET = require("../config/server-config").JWT_SECRET;

const customerService = require("../services/customer-service");

passport.use(
  "signup",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const customer = await customerService.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email,
          password,
        });
        return done(null, customer);
      } catch (error) {
        return req.res.status(500).json({ message: error.message });
      }
    }
  )
);

passport.use(
  "signin",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      try {
        const customer = await customerService.getByEmail(email);
        if (!customer) {
          return req.res
            .status(500)
            .json({ message: "User with such email doesn't exist." });
        }
        const validate = await customer.isValidPassword(password);
        if (validate === null) {
          return req.res
            .status(500)
            .json({ message: "Your must auth via google." });
        }
        if (!validate) {
          return req.res
            .status(500)
            .json({ message: "Incorrect password. Try again." });
        }
        return done(null, customer);
      } catch (error) {
        return req.res.status(500).json({ message: error.message });
      }
    }
  )
);

const cookieExtractor = function (req) {
  var token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  return token;
};

passport.use(
  "jwt",
  new JWTStrategy(
    {
      secretOrKey: JWT_SECRET,
      jwtFromRequest: cookieExtractor,
      passReqToCallback: true,
    },
    async (req, payload, done) => {
      try {
        return done(null, payload.user);
      } catch (error) {
        return req.res.status(500).json({ message: error.message });
      }
    }
  )
);
