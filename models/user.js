const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const adminSchema = new Schema({
    email: {
        type: String,
        required: [true, "please Add an email address"],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "please add a valid email"]
    
      },
    userName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required:false
    },
    lastName: {
        type: String,
        required: false
    },
    
    password:{
      type:String,
      required:false
    },
    
    
    phoneNo: {
        type: String,
        required: false,
        minLength: 11,
        
    },
    profileImg: {
        type: String,
        required: false
    },
    registrationAt: {
        type: Date,
        default:Date.now(),
        required: false
    },
    role: {
        type: String,
        required: false,
        default:"admin"
    },
    hasAccess: {
        type: Boolean,
        required: false
    },
    isPassport:{
      type:Boolean,
      require:true,
      defalult:false
    },
    isVarified:{
      type:Boolean,
      require:true,
      default:false
    },
    otpToken:String,
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});



module.exports = mongoose.model('User', adminSchema);