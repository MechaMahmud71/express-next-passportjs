exports.getProfile=async(req,res,next)=>{
  res.json({
    success:true,
    message:"Profile is authenticated!!"
  })
}


exports.getFailed=async(req,res,next)=>{
  res.redirect('http://localhost:3000/failed')
}