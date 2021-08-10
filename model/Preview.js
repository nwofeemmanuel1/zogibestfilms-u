const mongoose=require("mongoose")
const config=require("config")
mongoose.connect(config.get("connection.url"),{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connected to preview database"))
.catch(err=>console.log(err.message))
// const ThumbNail=require("./ThumbNail")

const previewSchema=new mongoose.Schema({
thumbnail:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"thumbnail",
    required:true
},
previewLink:{
    type:String,
    required:true
}

})

const Preview=mongoose.model("preview",previewSchema)
module.exports=Preview