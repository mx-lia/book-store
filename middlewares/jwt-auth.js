const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const JWT_SECRET = require("../config/server-config").JWT_SECRET;

const customerService = require("../services/customer-service");

passport.use(
  "register",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback : true
    },
    async (req, email, password, done) => {
      try {
        const firstName= req.body.firstName;
        const lastName= req.body.lastName;
        const customer = await customerService.create({ firstName, lastName, email, password });
        return done(null, customer);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    async (email, password, done) => {
      try {
        const customer = await customerService.getByEmail(email);
        if( !customer ){
          return done(null, false, { message : 'User not found'});
        }
        const validate = await customer.isValidPassword(password);
        if( !validate ){
          return done(null, false, { message : 'Wrong Password'});
        }
        return done(null, customer);
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  new JWTstrategy(
    {
      secretOrKey: JWT_SECRET,
      jwtFromRequest: ExtractJWT.fromUrlQueryParameter("secret_token"),
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        done(error);
      }
    }
  )
);