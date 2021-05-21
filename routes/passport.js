const router=require("express").Router();
const passport = require('passport');
const { getProfile, getFailed } = require("../controller/passport");

//facebook auth
router.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email,user_photos' }));
router.get('/auth/facebook/callback',
		passport.authenticate('facebook', {
			successRedirect : 'http://localhost:3000/profile',
			failureRedirect : '/failed'
}));

//google auth
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/google/callback',
passport.authenticate('google', { failureRedirect: 'http://localhost:3000' }),
function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('http://localhost:3000/profile');
});


router.get("/profile",getProfile);

router.get("/failed",getFailed);





module.exports=router;
