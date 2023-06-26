const mongoose=require('mongoose')
const MessageSchema=new mongoose.Schema({
    message:{type:String},
    from:{type: String},
    to:{type: String}
 
    
})

module.exports=mongoose.model('Message',MessageSchema)