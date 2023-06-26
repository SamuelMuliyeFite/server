const purchasedStock=require('../../Model/PurchasedStock')
exports.getUserinfo=(req,res)=>{
    purchasedStock.find({userName:req.body.userName})
    .then((data)=>{
        if(data){
            res.status(200).json({message:data})
        }
    })
    .catch((err)=>{
        res.status(400).json({
            error:err
        })
    })

}