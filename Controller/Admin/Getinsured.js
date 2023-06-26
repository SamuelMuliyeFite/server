const purchasedStock=require('../../Model/PurchasedStock')
exports.getinsured=(req,res)=>{
    purchasedStock.find({insured:true})
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