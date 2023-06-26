const newcompany=require('../../Model/newCompany') 
exports.getnewCompany=(req,res)=>{
    newcompany.find({}).then((data)=>{
        res.status(200).json({message:data})
    })
    .catch((err)=>{
        res.status(400).json({error:err})
    })

}