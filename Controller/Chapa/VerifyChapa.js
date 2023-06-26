const company=require('../../Model/Company')
exports.Vchapa=(req,res)=>{
    const data = req.params.body.split(",")
    company.findOne({companyEmail:data[1]})
    .then((item)=>{
       
        company.findOneAndUpdate({companyEmail:data[1]},{balance:item.balance - parseInt(data[0])},{new:true})
        .then((ittem)=>{
            console.log(ittem)
        })
    })

}