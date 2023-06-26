const { insertMany } = require('../../Model/Company')
const company=require('../../Model/Company')
const purchasedStock=require('../../Model/PurchasedStock')
exports.getTransaction=(req,res)=>{
    let monthdata=[0,0,0,0,0,0,0,0,0,0,0,0]
    purchasedStock.findOne({companyName:req.body.companyName})
    .then((data)=>{
        if(data){
           purchasedStock.aggregate([
         
            {
            $match:{
                createdAt:{
                    $gte:new Date('2023-01-26T10:16:45.810+00:00'),
                    $lt: new Date('2023-10-26T10:16:45.810+00:00'),
                },
                companyName:req.body.companyName,
            }
           },{
            $group:{
                _id:{$month:'$createdAt'},
                data:{$push:'$$ROOT'}
            }
           },
           {
            $sort:{_id:1}
           }  
        ]).then((data)=>{
            if(data){
                data.map((item)=>{
                    let total=0
                    item.data.map((value)=>{
                      total=total+(value.price)
                    })
            
                monthdata[item._id -1]=total
              })
              res.status(200).json({
                message:monthdata
              })

            }
        })
            
        
        }
        else{
            res.status(200).json({
                error:'somthing wrong'
            })
        }
    })

  


}