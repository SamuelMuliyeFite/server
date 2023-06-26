const user=require('../../Model/user')
exports.Adminsignup=(req,res)=>{
    const _user=new user({firstName:req.body.firstName,lastName:req.body.lastName,email:req.body.email,password:req.body.password ,role:"admin" })
    user.findOne({email:req.body.email}).then((data)=>{
        if(data){
            res.status(400).json({
                error:"email already exist"
            })
        }
        else{
            _user.save().then((data)=>{
                res.status(200).json({
                    message:data
                })
            })
            .catch((err)=>{
                res.status(400).json({
                    error:'somthing went wrong'
                })
            })
        }
        
    })

   
}