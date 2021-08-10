const mongoose=require("mongoose")
const config=require("config")
mongoose.connect(config.get("connection.url"),{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connected to video dbm"))
.catch(err=>console.log(err.message))


const videoSchema=new mongoose.Schema({
    thumbnail:{
type:mongoose.Schema.Types.ObjectId,
ref:"thumbnail",
required:true
    },
    preview:{
type:mongoose.Schema.Types.ObjectId,
ref:"preview",
required:true
    },

    videoLink:{
        type:String,
        required:true
    }

})
const Video=mongoose.model("video",videoSchema)
module.exports=Video
