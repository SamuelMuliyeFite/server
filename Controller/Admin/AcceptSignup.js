const company=require('../../Model/Company')
const newCompany = require('../../Model/newCompany')
exports.Acceptsignup=(req,res)=>{
    
    const _company=new company({
        ...req.body
      })
      _company.save().then((_data)=>{
        if(_data){
            newCompany.findOneAndDelete({companyName:req.body.companyName}).then((data)=>{
              
                  if(data){
                    res.status(200).json({
                      message:data
                    })
                  }

                
            })
            .catch((err)=>{
                res.status(400).json({
                    error:err
                })
              })
           
        }
        else{
            res.status(400).json({
                error:'something went wrong'
            })

        }
      })
      .catch((err)=>{
        res.status(400).json({
            error:err
        })
      })

      sendOtp=(email)=>{
     
     
                 // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: 'natymok1010@gmail.com', // generated ethereal user
          pass: 'zhawqlemfkpqyccb', // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let mailoption = {
        from: '"Ethio Stock  👻" <natymok1010@gmail.com>', // sender address
        to: email,
        subject: "Successfully registerd ✔", // Subject line
        html: `<p> signup Request accepted you can know signin to our system </p>`, // html body
      };
    
    
 
        
    
         
              transporter.sendMail(mailoption).then((data)=>{
                if(data){
                  console.log(data)
                 
                }
              })
              .catch((err)=>{
                console.log(err)
              })
            
    
          
         
    
      }






}