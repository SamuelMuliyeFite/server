const company=require('../Model/Company')
const jwt=require('jsonwebtoken')
exports.Signin=((req,res)=>{
    const signtoken=(id=>{
       const token=jwt.sign({id},'the net ninja',{expiresIn:'1y'})
       return token

    })
    company.findOne({companyEmail:req.body.companyEmail})
    .then((data)=>{
        if(data){

                 
           

            if(data.authenticate(req.body.password)){
                console.log(data,'daaaaaaaaaa')
                const _token=signtoken(data._id)
                res.status(200).json({
                    message:'sucessfully sined',
                    Accesstoken:_token,
                    companyName:data.companyName,
                    amount:data.amount,
                    balance:data.balance
                })

                
               

            }
            else{
                res.status(400).json({
                    error:'wrong password'
                })
            }


           
           
           
        }
        else{
            res.status(400).json({
                error:'user not found'
            })
        }
    })
    .catch((err)=>{
        res.status(400).json({
            error:' something went wrong'
        })
    })
})



