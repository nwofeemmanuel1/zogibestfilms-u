const Joi=require("joi")

const validateuser=(req)=>{
const schema=Joi.object({
email:Joi.string()
.email()
.required(),
phone_number:Joi.number()
.required(),
purpose:Joi.string()
.required(),
password:Joi.string()
.required()
.min(8)
})

const result=schema.validate({email:req.email,phone_number:req.phone_number,purpose:req.purpose,password:req.password})
if(result.error)return result.error.message
return true
}

// const result=validateuser({email:"email@gmail.com",phone_number:0827827,password:"password"})
// console.log(result)

module.exports=validateuser

