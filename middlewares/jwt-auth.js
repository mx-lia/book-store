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
        done(error);
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
    },
    async (email, password, done) => {
      try {
        const customer = await customerService.getByEmail(email);
        if (!customer) {
          return done(null, false, { message: "User not found" });
        }
        const validate = await customer.isValidPassword(password);
        if (!validate) {
          return done(null, false, { message: "Wrong Password" });
        }
        return done(null, customer);
      } catch (error) {
        done(error);
      }
    }
  )
);

const cookieExtractor = function(req) {
  var token = null;
  if (req && req.cookies) {
      token = req.cookies['jwt'];
  }
  return token;
};

passport.use(
  "jwt",
  new JWTStrategy(
    {
      secretOrKey: JWT_SECRET,
      jwtFromRequest: cookieExtractor,
    },
    async (payload, done) => {
      try {
        return done(null, payload.user);
      } catch (error) {
        done(error);
      }
    }
  )
);
