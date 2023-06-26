const newcompany=require('../../Model/newCompany')
exports.DeclineSignup=(req,res)=>{
    newcompany.findOneAndDelete({companyName:req.body.companyName})
    .then((data)=>{
        if(data){
            res.status(200).json({
                message:data
            })
        }
    })
    .catch((err)=>{
        res.status(400).json({
            error:err
        })
    })
}
