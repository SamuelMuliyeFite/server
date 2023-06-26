const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const newCompanychema=new mongoose.Schema({
    companyName:{
         type:String,
        required:true,
        trim:true},

    companyEmail:{
            type:String,
           required:true,
           trim:true},
   
    password:{
         type:String,
         required:true,
         trim:true},


         verified:{
            type:Boolean,
            default:false
        },
        balance:{
            type:Number,
            default:0
        
        },
        


   
}, {timestamps:true})

newCompanychema.method({
    authenticate:function(userpassword){
        return bcrypt.compareSync(userpassword,this.password)},
})
module.exports=mongoose.model('newCompany',newCompanychema)