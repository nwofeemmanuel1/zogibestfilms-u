document.addEventListener("DOMContentLoaded",()=>
document.querySelector("input").onkeyup=()=>{
 if(document.querySelector("input").value.length>=1){
 searchVideos(document.querySelector("input").value)
 }
}

)
const searchVideos=async(searchKey)=>{
    try{
    document.querySelector("main").innerHTML="<h1 style='text-align:center; color:green'> loading videos please wait...</h1>"
   const response=await fetch("/api/listThumbnail/searchforvideo",{
       method:"POST",
       headers:{"content-type":"application/json"},
       body:JSON.stringify({searchKey})
   })
  const result=await response.json()
  console.log(result)
  if(result.error){
    document.querySelector("main").innerHTML=`<h1 style='text-align:center; color:red' > ${result.errMessage}</h1>`
    return null
  }else{
    document.querySelector("main").innerHTML=""
    console.log(result.message)
   return result.message.forEach(element => {
    createthumbnail(element.imageLink,element.video_name,element._id)
   });
  
  }
    }catch(err){
      document.querySelector("main").innerHTML=`<h1 style='text-align:center; color:red'> an error occured ${err.message} please refresh page</h1>`
    }
  }
  
  
  
  const createthumbnail=(src,videoname,id)=>{
    const span=document.createElement("span")
    const image=document.createElement("img")
  const p=document.createElement("p")
  image.src=src
  // image.alt="image"
  image.style.width="100%"
  image.style.height="75%"
  p.innerHTML=videoname
  span.onclick=()=>window.location.href=`/preview/${id}`
  span.appendChild(image)
  span.appendChild(p)
  document.querySelector("main").appendChild(span)
  }
  
  
  
  