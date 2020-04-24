const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20');

const customerService = require("../services/customer-service");

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "158933193129-5k5qh15uq6dj43m89f5h1lcbdqgob8s6.apps.googleusercontent.com",
      clientSecret: "yVBNg7gXcdPDmqLRxuVcO0pA",
      callbackURL: "http://localhost:3000/",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const firstName = profile.name.givenName;
        const lastName = profile.name.familyName;
        const email = profile.emails[0].value;
        const customer = await customerService.findOrCreateByEmail({ firstName, lastName, email });
        return done(null, customer);
      } catch (error) {
        done(error);
      }
    }
  )
);
