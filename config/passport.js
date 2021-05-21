var passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;


exports.facebook=(passport)=>{
  passport.use(new FacebookStrategy({
    // 
    clientID:837969263422062,
    clientSecret:"7dca618e4df0ece27b02cc09820ec200",
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
    // 529801177291-s8egua48q5uuor9l92o0h4gesbp416du.apps.googleusercontent.com
    clientID: "529801177291-s8egua48q5uuor9l92o0h4gesbp416du.apps.googleusercontent.com",
    clientSecret:"A5gXO6ubjW-zdzVwhoneuvm-",
    callbackURL: "http://localhost:5000/auth/google/callback",
    profileFields   : ['id','displayName','name','gender','picture.type(large)','email']
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile)
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