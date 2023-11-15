const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
	new GoogleStrategy(
		{
			clientID: '220108687660-a9pcot45qas3d93rc2ul6591n1daico8.apps.googleusercontent.com',
            clientSecret: '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',
			callbackURL: "http://localhost:3001/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });