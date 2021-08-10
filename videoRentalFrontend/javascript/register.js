function setCookie(email, token) {
    // alert("called")
      const d = new Date();
      d.setTime(d.getTime() + 24*60*60*1000);
      let expires = "expires="+ d.toUTCString();
      document.cookie=`email=${email} ; ${expires}`
      document.cookie = `token=${token} ; ${expires}`;
      window.location.href="/dashboard.html"
     
    } 


const registerUser=async(email,phone_number,purpose,password)=>{
    document.querySelector("#register").innerHTML="please wait.."
    try{

   
  const response= await fetch("/api/register",{
method:"POST",
headers:{"content-type":"application/json"},
body:JSON.stringify({email,phone_number,purpose,password})
    })
    const result=await response.json()
    console.log(result)
    if(result.error){
     document.querySelector(".errmessage2").innerHTML=result.errMessage
     document.querySelector("#register").innerHTML="try again"
    }else{
    document.querySelector("#register").innerHTML="success"
    setCookie(result.message.email,result.token)
    // return setCookie(result.user.email,result.token)
    }

}catch(err){
    document.querySelector(".errmessage2").innerHTML=result.errmessage  
    document.querySelector("#register").innerHTML="try again"
}

}






document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("#register").onclick=()=>{
        event.preventDefault()
        const email=document.querySelector(".email").value
        const phone_number=document.querySelector("#number").value
        const purpose=document.querySelector("select").value
        const password=document.querySelector(".password").value
        if(!email)return document.querySelector(".errmessage2").innerHTML="Email is required"
        if(!phone_number)return document.querySelector(".errmessage2").innerHTML="phone number is required"
        if(!purpose)return document.querySelector(".errmessage2").innerHTML="your purpose of buying videos is required"
        if(!password)return document.querySelector(".errmessage2").innerHTML="password is required"
        if(password.length < 8)return document.querySelector(".errmessage2").innerHTML="password length must be greater than 8"
        document.querySelector(".errmessage2").innerHTML=""
        registerUser(email,phone_number,purpose,password)
    }
})