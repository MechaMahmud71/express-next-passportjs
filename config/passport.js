const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User=require("../models/user");
const userClass=require("../utils/user");


exports.facebook=(passport)=>{
  passport.use(new FacebookStrategy({
     
    clientID:837969263422062,
    clientSecret:process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/facebook/callback",
    profileFields   : ['id','displayName','name','gender','picture.type(large)','email']
  },
  async function(accessToken, refreshToken, profile, done) {
   
    try {
     const {name:{givenName},name:{familyName},displayName,emails}=profile;
     
     const userInstance=new userClass(givenName,familyName,displayName,emails[0].value);

     let user=await User.findOne({email:emails[0].value});
     
     if(!user){
      user=await User.create(userInstance);
      
      return done(null,profile)
     }
     
    return done(null,profile)
     
   } catch (error) {
      console.log(error.message)
      return done(null,false,{message:"User with this facebook account is not found"})
   }
  }
  ));
} 

exports.google=(passport)=>{
  passport.use(new GoogleStrategy({
    
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback",
    profileFields   : ['id','displayName','name','gender','picture.type(large)','email','phoneNo']
  },
  async function(accessToken, refreshToken, profile, done) {
   
    try {
     const {name:{givenName},name:{familyName},displayName,emails}=profile;
     
     const userInstance=new userClass(givenName,familyName,displayName,emails[0].value);

     let user=await User.findOne({email:emails[0].value});
     
     if(!user){
      user=await User.create(userInstance);
      
      return done(null,profile)
     }
     
    return done(null,profile)
     
   } catch (error) {
      console.log(error.message)
      return done(null,false,{message:"User with this facebook account is not found"})
   }
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