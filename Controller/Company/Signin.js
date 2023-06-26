const Company=require('../../Model/Company')
const jwt=require('jsonwebtoken')
exports.companySignin=(req,res)=>{
    const email=req.body.companyEmail
    const password=req.body.password
    signAccesToken=(id,CompanyName)=>{
        const token=jwt.sign({id,CompanyName},'the net ninja',{expiresIn:'1y'})
        return token
     }
     Company.findOne({companyEmail:email}).then((user)=>{
        if(user){
            if(user.password==password){
                console.log(user.Stock[0].amount)
                const company=signAccesToken(user._id,user.CompanyName)
                res.status(200).json({
                    message:'loged in',
                    companyName:user.companyName,
                    Accesstoken:company,
                    amount:user.Stock[0].amount

                    
                })
            }
            else{
                res.status(400).json({
                    message:'passsword incorrect'
                })
             }

        }
        else{
            res.status(400).json({
                message:'user not found'
            })
         }
      
     })

     .catch(()=>{
        res.status(400).json({
            message:'somthing went wrong '
        })
       })


}