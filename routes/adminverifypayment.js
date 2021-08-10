const express=require("express")
const Router=express.Router()
const isvalid=require("../validations/validateadminverify")
const User=require("../model/Register")
const Proof=require("../model/Proof")
Router.post("/",async(req,res)=>{
   const allisvalid=isvalid(req.body)
    if(allisvalid===true){
const user=await User.findOne({email:req.body.email})
console.log("hey the proof",req.body.proof)
if(user){
    try{
user.set({
balance:user.balance += parseInt(req.body.amount)
})
const proof=await Proof.findByIdAndDelete(req.body.proof)
if(proof){
    const result=await user.save()
    return res.status(200).json({error:false,message:result})
}else{
return res.status(400).json({error:true,errMessage:"proof not found please refresh seems it has been deleted"})
}
// console.log(req.body.proof)
    }catch(err){
       return res.status(400).json({error:true,errMessage:err.message})
    }
}else{
   return  res.status(403).json({error:true,errMessage:"oops the user no longer exist please go through the database to monitor failure or call developer immediately"})
}
res.json({message:user})
    }else{
      return  res.status(400).json({error:true,errMessage:allisvalid})
    }

})
module.exports=Router


// console