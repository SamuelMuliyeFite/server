const company=require('../../Model/Company')
const stock=require('../../Model/Stock')
exports.addStock=(req,res)=>{
  const info={stockName:req.body.stockName,Description:req.body.Description,amount:req.body.amount,price:req.body.price,companyName:req.body.companyName}
  const _stock=new stock({
    ...info
  })
  _stock.save().then((data)=>{
    res.status(200).json({
      message:data
    })
  })
  .catch((err)=>{
    res.status(200).json({
      error:err
    })
  })


}