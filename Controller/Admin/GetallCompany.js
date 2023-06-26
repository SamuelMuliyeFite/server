const stock=require('../../Model/Stock') 
exports.getallCompany=(req,res)=>{
    stock.find({}).then((data)=>{
      if(data){
        res.status(200).json({message:data})
      }
    })
    .catch((err)=>{
        res.status(400).json({error:err})
    })

}