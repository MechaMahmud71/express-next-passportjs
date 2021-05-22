const express=require("express");
const app=express();
const passport = require('passport');
const colors = require('colors');
const dotenv=require('dotenv');
const connectDB = require('./config/db');

connectDB();
dotenv.config({path:".env"})

const passportConfig=require("./config/passport");
const passportRoute=require("./routes/passport");


app.use(passport.initialize());

app.use(passport.session());

passportConfig.facebook(passport);
passportConfig.google(passport);

app.use("/",passportRoute);


app.listen(5000,()=>{
  console.log("server is running on port 5000");
})