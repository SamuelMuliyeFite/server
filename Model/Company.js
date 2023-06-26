const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const userSchema=new mongoose.Schema({
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
  
    
         balance:{
            type:Number,
            default:0
        
        },
        



  

   
   

   
}, {timestamps:true})

userSchema.pre('save',async function(next){
    const salt= await bcrypt.genSalt(10)
    this.password= await bcrypt.hash(this.password,salt)
    next()


})
userSchema.method({
    authenticate:function(userpassword){
        return bcrypt.compareSync(userpassword,this.password)},
})
module.exports=mongoose.model('Company',userSchema)