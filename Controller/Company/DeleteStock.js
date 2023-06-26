const company=require('../../Model/Company')
exports.DeleteStock=(req,res)=>{
    company.findOneAndUpdate({CompanyName:req.body.CompanyName},{Stock:[]},{new:true}).then((data)=>{
        if(data){
            res.status(200).json({
                data:data
            })
        }
        else{
            res.status(400).json({
                error:'somthing went wrong'
            })
        }
    })
    .catch((err)=>{
        res.status(400).json({
            error:err
        })
    })

}