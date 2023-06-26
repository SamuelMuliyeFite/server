const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    companyName:{
        type:String,
        
        trim:true,
    
    },
    userName:{
        type:String,
   
        trim:true,
    
    },
    stockName:{
        type:String,
        
        trim:true,
    
    },
   
    amount:{
        type:Number,

    

    },
    price:{
        type:Number,
   

    },
    insured:{
        type:Boolean,
        default:false
    }
    
  

   
}, {timestamps:true})
module.exports=mongoose.model('purchasedStock',userSchema)