// GoogleOAuthMiddleware.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: '220108687660-a9pcot45qas3d93rc2ul6591n1daico8.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3001/auth/google/callback',
      scope: ["profile", "email"],
    },
    (accessToken, refreshToken, profile, done) => {
      // Handle user authentication logic here
      return done(null, profile);
    }
  )
);

module.exports = passport.authenticate('google', { scope: ['profile', 'email'] });
