const message=require('../../Model/Message')
exports.sendMessage=(req,res)=>{
    const _message=new message({
        ...req.body

    })
    _message.save()
    .then((data)=>{
        if(data){
           
        }
    })
    .catch((err)=>{
        res.status(400).json({
            error:err
        })
    })
        



}