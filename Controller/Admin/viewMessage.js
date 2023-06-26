const message=require('../../Model/Message')
exports.viewMessage=(req,res)=>{
   message.find({to:req.body.to}) 
   .then((data)=>{
    res.status(200).json({
        message:data
    })
   })
   .catch((err)=>{
    res.status(400).json({
        error:err
    })
   })



}