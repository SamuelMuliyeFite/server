const newCompany=require('../../Model/newCompany')
exports.companySignup=(req,res)=>{
  console.log(req.body)
 newCompany.findOne({CompanyName:req.body.CompanyName}).then((data)=>{
  if(data){
    res.status(400).json({
      error:'email already exist'
    })
  }

  else{
    const _newcompany= new newCompany({
      ...req.body
    })
 _newcompany.save().then((data)=>{
  if(data){
    res.status(200).json({
      message:data
    })
  }
 })
 .catch((err)=>{
  res.status(200).json({
    error:err
  })
 })

 
  }

 })
 .catch((err)=>{
  res.status(400).json({
    error:err
  })
        
 })
}