const Joi=require("joi")
const validateadminverifypayment=(req)=>{
const schema=Joi.object({
    amount:Joi.number()
    .required()
    .min(0),
    email:Joi.string()
    .required()
    .email(),
    proof:Joi.string()
    .required()
})
const result=schema.validate({amount:req.amount,email:req.email,proof:req.proof})
if(result.error)return result.error.message
return true
}
module.exports=validateadminverifypayment