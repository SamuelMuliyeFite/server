const message=require('../../Model/Message')
exports.replayMessage=(req,res)=>{
    const _message=new message({
        ...req.body

    })
    _message.save()
    .then((data)=>{
        if(data){
            message.findOneAndDelete({from:req.body.to})
            .then((data)=>{
                if(data){
                    res.status(200).json({
                        message:'sucess'
                    })
                }
            })
            .catch((err)=>{
                   res.status(400).json({
                        error:'something wrong'
                    })
            })
           
        }
    })
    .catch((err)=>{
        res.status(400).json({
            error:err
        })
    })
        



}