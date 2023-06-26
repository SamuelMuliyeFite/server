
const company=require('../../Model/Company')
const purchasedStock=require("../../Model/PurchasedStock")
const stock=require('../../Model/Stock')
exports.buyStock=(req,res)=>{

    const info={stockName:req.body.stockName,username:req.body.username,amount:req.body.amount,price:req.body.price}
    stock.findOne({companyName:req.body.companyName}).then((data)=>{
       if(data){
              if(  parseInt(req.body.price) == parseInt(req.body.amount )* parseInt(data.price)){
                        const customerinfo={insured:req.body.insured,userName:req.body.username,companyName:req.body.companyName,price:parseInt(req.body.amount )* parseInt(data.price),amount:req.body.amount,stockName:req.body.stockName,insured:req.body.insured
                        }
                  const totalsell=data.totalsell + req.body.price
                  const remainingStock=data.amount - req.body.amount
                
                  const _purchasedStock=new purchasedStock ({                                                                                                                                                                                                                      
                      ...customerinfo
                             })
                             purchasedStock.findOne({userName:req.body.username,companyName:req.body.companyName})
                             .then((data0)=>{
                                if(data0){
                                    purchasedStock.findOneAndUpdate({userName:req.body.username},{amount:parseInt(data0.amount)+parseInt(req.body.amount),price:data0.price+(req.body.price),insured:req.body.insured})
                                    .then(()=>{
                                        stock.findOneAndUpdate({companyName:req.body.companyName},{totalsell:totalsell,amount:remainingStock},{new:true})
                                        .then((data)=>{
                                            if(data){
                                                company.findOne({companyName:req.body.companyName})
                                                .then((ittem)=>{
                                                    if(ittem){
                                                        company.findOneAndUpdate({companyName:req.body.companyName},{balance:ittem.balance + parseInt(req.body.price)},{new:true})
                                                        .then((data)=>{
                                                            if(data){
                                                                res.status(200).json({
                                                                    message:'you have succesfully buyed stockkkk'
                                                                })
                                                            }
                                                            else{
                                                                res.status(400).json({
                                                                    message:'something went wrong'
                                                                })
                                                            }
                                                        })
                                                        .catch((Err)=>{
                                                            res.status(400).json({
                                                                message:'something went wrong'
                                                            })
                                                        })
                                                    }
                                                })
            
                                            }
                                        })
                                      

                                    })
                                }

                          else{


                            _purchasedStock.save() .then(()=>{
                                stock.findOneAndUpdate({companyName:req.body.companyName},{totalsell:totalsell,amount:remainingStock},{new:true})
                                .then((data)=>{
                                    if(data){
                                      company.findOne({companyName:req.body.companyName})
                                      .then((values)=>{
                                        company.findOneAndUpdate({companyName:req.body.companyName},{balance:values.balance+parseInt(req.body.price)},{new:true})
                                        .then((data)=>{
                                            if(data){
                                                res.status(200).json({
                                                    message:'you have succesfully buyed stockkkk'
                                                })
                                            }
                                            else{
                                                res.status(400).json({
                                                    message:'something went wrong'
                                                })
                                            }
                                        })
                                        .catch((Err)=>{
                                            res.status(400).json({
                                                message:'something went wrong'
                                            })
                                        })
                                      })
    
                                    }
                                })
                              
                
        
                            })
                            




                          }




                             })
                   
                   
                    
                        
                    }
                    else{
                        res.status(400).json({
                            error:"something went wrong"
                        })
                    }
                
               

        
            
           

           
        
       }
    })
  
 

  

}