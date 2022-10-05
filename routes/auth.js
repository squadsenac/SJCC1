const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const dotenv = require('dotenv');
require('dotenv').config();

const GOOGLE_CLIENT_ID = "538559347737-1u3vghkae30sbsg5s5j5himmkvarmljo.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback",
  scope:['https://www.googleapis.com/auth/youtube.readonly'],
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
/*   User.findOrCreate({ userId: profile.id }, function (err, user) {
    return done(err, user);
  }); */
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});