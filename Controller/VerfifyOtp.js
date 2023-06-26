const otpModel=require('../Model/Otp')
const user=require('../Model/user')
const newcompany=require('../Model/newCompany')
exports.verifyOtp=(req,res)=>{
  
  otpModel.findOne({userEmail:req.body.companyEmail}).then((data)=>{
        if(data){

            if(data.expiresAt < Date.now()){
                otpModel.findOneAndDelete({userEmail:req.body.companyEmail}).then((data)=>{
                    if(data){
                       newcompany.findOneAndDelete({companyEmail:req.body.companyEmail}).then((data2)=>{
                        if(data2){
                            res.status(400).json({
                                message:"otp expired sign up again"
                              })

                            
                        }
                    })
                    }
                })
              
            }
            else{
                        if(data.authenticate(req.body.otp)){
                    otpModel.findOneAndDelete({userEmail:req.body.companyEmail}).then((data)=>{
                        if(data){
                            newcompany.findOneAndUpdate({companyEmail:req.body.companyEmail},{verified:true},{new:true})
                            .then((data)=>{
                                if(data){

                                    res.status(200).json({
                                        message:"you have succesfully verified"
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
                else{

                    res.status(400).json({
                        error:"incorrect code "
                      })

                }
            }

        }
        else {
            res.status(400).json({
                error:"user not exist"
              })
        }
    })
    .catch((err)=>{
        res.status(400).json({
          error:err
        })
    })


}