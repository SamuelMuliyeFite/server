const PurchasedStock=require('../../Model/PurchasedStock')
const company=require('../../Model/Company')
exports.getStockPrice=(req,res)=>{

       company.findOne({companyName:req.body.companyName})
       .then((value)=>{
        if(value){
          PurchasedStock.find({companyName:req.body.companyName}).then((data)=>{
            if(data){
               
            
              let total=0
           
              data.map((item)=>{
            
                 total=parseInt(item.price) + total
                
                
                 
  
              })
              res.status(200).json({
                message:total,
               
                customers:data.length,
                balance:value.balance
  
  
  
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