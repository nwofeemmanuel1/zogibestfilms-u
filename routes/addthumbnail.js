const express= require("express")
const Router=express.Router()
const multer=require("multer")
const Thumbnail=require("../model/ThumbNail")
const isvalid=require("../validations/validatethumbnail")
const Joi=require("joi")
const storage=multer.diskStorage({
destination:(req,file,cb)=>{
cb(null,"./thumbNail")
},

filename:(req,file,cb)=>{
cb(null,Math.random(17.1*3562*27285726272*382+91*57657220*828928373733*5625262*27762762727)+file.originalname)
}

})

const FileFilter=(req,file,cb)=>{

    if(file.mimetype === 'image/png'|| file.mimetype === 'image/jpeg'){
         cb(null,true)
    }else{
 cb(null,false)
    }
    
}
//remember that each video has a type to check weather is mp3 or mp4 so i can set it on the front end

const uploads=multer({storage:storage,fileFilter:FileFilter})

Router.post("/", uploads.any("video"), async(req,res)=>{
   
if(req.files[0]){
   // console.log(req.files)
const uploadIsValid=isvalid(req.body)

if(uploadIsValid ==true){

   try{ 

      const newthumbnail=await new Thumbnail({
   imageLink:`https://zogibestfilms.herokuapp.com/api/seevideothumbnail/${req.files[0].filename}`,
video_name:req.body.video_name,
video_description:req.body.video_description,
videopricefor1day:req.body.videopricefor1day,
videopricefor1year:req.body.videopricefor1year,
videopricefor3years:req.body.videopricefor3years

})

const result=await newthumbnail.save()
res.json({error:false,message:result})
// res.json({message:"uploaded"})



   }catch(err){
      res.status(400).json({error:true,errMessage:err.message})
   }



}else
{
res.json({error:true,errMessage:uploadIsValid})
}

}else{
   res.status(403).json({error:true,errMessage:"an error occured check internet connection and make sure image is of type 'png' or 'jpeg' "})
}
// return res.send("no file uploaded an error occured")

 

})




Router.get("/allthumbnail",async(req,res)=>{
   try{
const result=await Thumbnail.find()
if(result[0])return res.status(200).json({error:false,message:result})
return res.status(404).json({error:true,errMessage:"sorry no video has been added so far"})
   }catch(err){
      res.status(400).json({error:true,errMessage:err.message})
   }
})



const validatesearch=(searchKey)=>{
   const schema=Joi.object({
      searchKey:Joi.string().required()
   })
   const result=schema.validate({searchKey:searchKey})
   if(result.error)return result.error.message
return true
}

Router.post("/searchforvideo",async(req,res)=>{
const searchisvalid=validatesearch(req.body.searchKey)
if(searchisvalid==true){
   let replace = req.body.searchKey;
   var expression = new RegExp(`.*${replace}.*`);

   try{
      const regex=`/.*${req.body.searchKey}.*/`
   const result=await Thumbnail.find({video_name:expression})
       if(result[0])return res.status(200).json({error:false,message:result})
       return res.status(404).json({error:true,errMessage:"No result found"})
          }catch(err){
             res.status(400).json({error:true,errMessage:err.message})
                }
      }else{
         res.status(400).json({error:true,errMessage:searchisvalid})
      }
})

module.exports=Router

