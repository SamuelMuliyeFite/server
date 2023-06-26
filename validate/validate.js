const {check,validationResult}=require('express-validator')
const multer=require('multer')
const path=require('path')
exports.validateRequest=[
    check('firstName')
    .notEmpty()
    .withMessage('first name is required'),
    check('lastName')
    .notEmpty()
    .withMessage('last name required'),
    check('email')
    .isEmail()
    .withMessage('in valid email'),
    check('email')
    .notEmpty()
    .withMessage('email required'),
    check('password')
    .isLength({min:6})
    .withMessage('password must be graeter  than 6')

    ]
    exports.validatesigninRequest=[
        check('companyEmail')
        .isEmail()
        .withMessage('enter valid email'),
        check('companyEmail')
        .notEmpty()
        .withMessage('enter your email first'),
        check('password')
        .notEmpty()
        .withMessage('enter your password to signin')
        
        
        
    ]
    exports.isValidatedRequest=(req,res,next)=>{
        const errors=validationResult(req)
    
        if(errors.array().length>0){
            return res.status(400).json({
                error:errors.array()[0].msg
            })
            
        }

     next()
    }

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null,path.join(path.dirname(__dirname),'uploads'))
        },
        filename: function (req, file, cb) {
        /*  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)*/
          cb(null, file.originalname  )
        }
      })
   const upload=multer({storage:storage})
   exports.upload=upload
  

