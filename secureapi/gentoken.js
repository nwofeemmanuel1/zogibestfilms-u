// const dotenv=require("dotenv")
// dotenv.config.call()

const jwt=require("jsonwebtoken")

const genToken=(userId)=>{
  const token=  jwt.sign({userId},"jwtPrivatekey")
  return token
}

module.exports=genToken




