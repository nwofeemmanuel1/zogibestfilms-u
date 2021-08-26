//heroku logs --tail
const express=require("express")
const app=express()
const Video=require("./model/Video")

const ejs=require("ejs")
app.set('views', __dirname + '/views');
app.use(express.json())

 const register=require('./routes/register.js')
const loginUser=require("./routes/login")
const listThumbnail=require("./routes/addthumbnail")
const listPreview=require("./routes/addpreview")
const listVideo=require("./routes/addvideo")
const buyVideo=require("./routes/sales")
const myvideos=require("./routes/myvideos")

const proof=require("./routes/proof")
app.use("/api/payment/proof",proof)
const verifyToken=require("./routes/verifyToken")
app.use("/api/user/verifytoken", verifyToken)

app.use("/",express.static("./videoRentalFrontend"))
app.use("/api/register",register)
app.use("/api/login",loginUser)
app.use("/api/listThumbnail",listThumbnail)
app.use("/api/movie/listPreview", listPreview)
app.use("/api/movie/listVideo",listVideo)
app.use("/api/movie/buymovie",buyVideo)
app.use("/api/movie/myvideos",myvideos)


const listfreevideothumbnail=require("./routes/addthumbnail(free)")
const listfreevideo=require("./routes/addvideo(free)")

const paymentverification_admin=require("./routes/adminverifypayment")
//verifypayment
app.use("/api/admin/verifypayment",paymentverification_admin)
app.use("/api/seevideothumbnail",express.static("./thumbNail"))
app.use("/api/seefreevideothumbnail",express.static("./freethumbnail"))
app.use("/api/seevideopreview",express.static("./preview"))
app.use("/api/mainvideos",express.static("./Videos"))
app.use("/api/freevideo",express.static("./freevideo"))
app.use("/api/proof/one",express.static("./evidence"))
//add free video
app.use("/api/admin/freethumbnail",listfreevideothumbnail)
app.use("/api/admin/freevideo",listfreevideo)
app.use("/css",express.static("./css"))
const validatePreview=require("./validations/validatepreview")
const Preview=require("./model/Preview")
const Thumbnail=require("./model/ThumbNail")

const Freevideo=require("./model/freevideomodel/freevideo")



app.get('/preview/:id',async(req,res)=>{
   try{
const preview= await Preview.findOne({thumbnail:req.params.id})
.populate("thumbnail")
// console.log(preview)
// console.log(req.params.id)
if(preview){

//  console.log(req.params.id)
    res.render('index.ejs', {
          title: 'HaHa',
      nav: ['Home','About','Contact'], 
      // time:Date.now(),
      videopricefor1day:preview.thumbnail.videopricefor1day,
      videopricefor1year:preview.thumbnail.videopricefor1year,
      videopricefor3years:preview.thumbnail.videopricefor3years,
      videoname:preview.thumbnail.video_name,
      videodescription:preview.thumbnail.video_description,
      videoSource:preview.previewLink,
      
      preview_id:preview._id
    });
  

}else{
    await Thumbnail.findByIdAndDelete(req.params.id)
    res.status(404).json({error:true,errMessage:"preview was not found"})
}
   }catch(err){
res.status(400).json({error:true,errMessage:err.message})
   }
  
  });




// // console.log("securitykey="+process.env.USERPROFILE)
// console.log("databaseurl= "+process.env.DATABASEURL)

  
app.get('/freevideo/:id',async(req,res)=>{
   try{
const freevideo= await Freevideo.findOne({freethumbnail:req.params.id})
.populate("freethumbnail")

if(freevideo){

    res.render('freevideo.ejs', {
          title: 'HaHa',
      nav: ['Home','About','Contact'], 
      videoname:freevideo.freethumbnail.video_name,
      videodescription:freevideo.freethumbnail.video_description,
      videoSource:freevideo.videoLink,
      
  
    });
  

}else{
    await Thumbnail.findByIdAndDelete(req.params.id)
    res.status(404).json({error:true,errMessage:"preview was not found"})
}
   }catch(err){
res.status(400).json({error:true,errMessage:`an error occured:${err.message}`})
   }
  
  });

 



const port=process.env.PORT || 8080
app.listen(port,()=>console.log(`listening on port ${port}`))






// const express=require("express")
// const app=express()
// const ejs=require("ejs")
// app.set('views', __dirname + '/views');
// app.use(express.json())

// app.use("/api/seevideothumbnail",express.static("./thumbNail"))
// app.use("/api/seefreevideothumbnail",express.static("./freethumbnail"))
// app.use("/api/seevideopreview",express.static("./preview"))
// app.use("/api/mainvideos",express.static("./Videos"))
// app.use("/api/freevideo",express.static("./freevideo"))
// app.use('/api/proof/one',express.static("./evidence"))
// // const register=require("./routes/register.js")
// // app.use("/api/register",register)
// // const register=require("./routes/register.js")
// // const loginUser=require("./routes/login")
// //  const listThumbnail=require("./routes/addthumbnail")
// // const listPreview=require("./routes/addpreview")
// // const listVideo=require("./routes/addvideo")
// // const buyVideo=require("./routes/sales")
// // const myvideos=require("./routes/myvideos")
// // const proof=require("./routes/proof")
// // app.use("/api/payment/proof",proof)
// const verifyToken=require("./routes/verifyToken")
// app.use("/api/user/verifytoken", verifyToken)
// app.use("/css",express.static("./css"))
// app.use('/',express.static("./videoRentalFrontend"))

// const port=process.env.PORT||3000

// app.listen(port,()=>console.log("running"))


