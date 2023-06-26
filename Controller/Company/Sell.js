
const company=require('../../Model/Company')
const purchasedStock=require("../../Model/PurchasedStock")
const Stock = require('../../Model/Stock')
exports.sellStock=(req,res)=>{
purchasedStock.findOne({userName:req.body.userName,companyName:req.body.companyName})
.then((item)=>{
    if(item){
          if(parseInt(item.amount) >= req.body.amount)
          {
            Stock.findOne({companyName:req.body.companyName}).then((data0)=>{
                if(data0){
                    Stock.findOneAndUpdate({companyName:req.body.companyName},{amount:((parseInt(data0.amount)) + parseInt(req.body.amount)),totalsell:(data0.totalsell-((parseInt(req.body.amount))*(data0.price)))},{new:true})
                    .then((data1)=>{
                        if(data1){
                            
                            purchasedStock.findOneAndUpdate({userName:req.body.userName},{amount:parseInt(item.amount )- (parseInt(req.body.amount)),price:item.price-((data1.price)*(parseInt(req.body.amount)))},{new:true})
                            .then((data)=>{
                                if(data){
                                    if(parseInt(data.amount) == 0)
                                    {
                                        purchasedStock.findOneAndDelete({userName:req.body.userName})
                                        .then(()=>{
                                            res.status(200).json({
                                                message:'you have selled all your stocks'
                                            })

                                        })
                                    }
                                    else{

                                        res.status(200).json({
                                            message:data
                                        })

                                    }
                                   
                                }
                            })
                          
                        }
                        
                        else{
                            res.status(400).json({
                                error:'something wenttttkt wrong'
                            })
                        }
                    })
                    .catch((err)=>{
                        res.status(400).json({
                            error:err
                        })
                    })
                }
            })

          }
              
    }
    else{
        res.status(400).json({
            error:'something wrong buy stock first '

        })
    }
    
})
 

  

}