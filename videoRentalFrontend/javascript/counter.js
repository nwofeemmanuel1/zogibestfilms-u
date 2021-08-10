let count=1
 document.addEventListener("scroll",()=>{
    setInterval(()=>{
        if(count <5000)return document.querySelector(".firstcount").innerHTML=count++
        count=1
    },200)

})




let secondcount=1
 document.addEventListener("scroll",()=>{
    setInterval(()=>{
        if(secondcount <9000)return document.querySelector(".secondcount").innerHTML=secondcount++
        secondcount=1
    },200)

})




