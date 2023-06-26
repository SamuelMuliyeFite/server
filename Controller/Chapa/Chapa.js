
const Chapa = require('chapa')
exports.chapa=(req,res)=>{
 let transref=null

let myChapa = new Chapa('CHASECK_TEST-f2kHdNpLDf8lQdHYFtKq4WwPnIcPk4R4')

const customerInfo =  {
    amount: req.body.amount,
    currency: 'ETB',
    email: req.body.email,
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    // tx_ref: 'tx-x12345', // if autoRef is set in the options we dont't need to provide reference, instead it will generate it for us
    callback_url: `https://company-server-svea.onrender.com/api/chapaa/${req.body.amount},${req.body.email}`,
     return_url:'https://companystock-khv7.onrender.com/',  // your callback URL
    customization: {
        title: 'I love e-commerce',
        description: 'It is time to pay'
    }
}
myChapa.initialize(customerInfo, { autoRef: true }).then(response => {
    /*
    response:
      {
        message: 'Hosted Link',
        status: 'success' || 'failed',
        data: {
          checkout_url: 'https://checkout.chapa.co/checkout/payment/:token'
        },
        tx_ref: 'generated-token' // this will be the auto generated reference
      }
    */
     
        res.status(200).json({
            chapa:response
        })
   
    // saveReference(response.tx_ref)
}).catch(e => console.log(e)) // catch errors





}