const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const GoogleConfig = require("../config/oauth2-config");

const customerService = require("../services/customer-service");

passport.use(
  new GoogleStrategy(
    {
      clientID: GoogleConfig.GOOGLE_CLIENT_ID,
      clientSecret: GoogleConfig.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://localhost:4000/auth/google/redirect"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const customer = await customerService.findOrCreateByEmail({
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          email: profile.emails[0].value,
        });
        return done(null, customer);
      } catch (error) {
        done(null, false, { message: error.message });
      }
    }
  )
);
