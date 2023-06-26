const { errorMonitor } = require('stream')
const user=require('../Model/user')
exports.getUsers=(req,res)=>{
    user.find({})
    .then((data)=>{
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