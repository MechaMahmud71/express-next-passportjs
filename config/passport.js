var passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;


exports.facebook=(passport)=>{
  passport.use(new FacebookStrategy({
     
    clientID:process.env.FACEBOOK_CLIENT_ID,
    clientSecret:process.env.FACEBOOK_CLIENT_ID,
    callbackURL: "http://localhost:5000/auth/facebook/callback",
    profileFields   : ['id','displayName','name','gender','picture.type(large)','email']
  },
  function(accessToken, refreshToken, profile, done) {
    
    done(null,profile)
  }
  ));
} 

exports.google=(passport)=>{
  passport.use(new GoogleStrategy({
    
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback",
    profileFields   : ['id','displayName','name','gender','picture.type(large)','email']
  },
  function(accessToken, refreshToken, profile, done) {
    
    done(null,profile)
  }
  ));
} 


passport.serializeUser(function(user, done) {

done(null, user);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
return done(null,user)
})