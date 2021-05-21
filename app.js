const express=require("express");
const app=express();
const passport = require('passport');
const dotenv=require('dotenv');

dotenv.config({path:"./config/config.env"})

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