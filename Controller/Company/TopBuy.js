const PurchasedStock=require('../../Model/PurchasedStock')
exports.topBuy=(req,res)=>{


        PurchasedStock.find({companyName:req.body.companyName}).sort({"price":-1})
        .then((data)=>{
            if(data){
                res.status(200).json({message:data})
            }
        })
        .catch((err)=>{
            res.status(400).json({error:err})
        })
  

}