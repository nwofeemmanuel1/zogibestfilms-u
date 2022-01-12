// function setCookie(email, token) {
//     // alert("called")
//       const d = new Date();
//       d.setTime(d.getTime() + 24*60*60*1000);
//       let expires = "expires="+ d.toUTCString();
//       document.cookie=`email=${email} ; ${expires}`
//       document.cookie = `token=${token} ; ${expires}`;
//       window.location.href="/videos.html"
     
//     } 


// const registerUser=async(email,phone_number,purpose,password)=>{
//     document.querySelector("#register").innerHTML="please wait.."
//     try{

   
//   const response= await fetch("/api/register",{
// method:"POST",
// headers:{"content-type":"application/json"},
// body:JSON.stringify({email,phone_number,purpose,password})
//     })
//     const result=await response.json()
//     console.log(result)
//     if(result.error){
//      document.querySelector(".errmessage2").innerHTML=result.errMessage
//      document.querySelector("#register").innerHTML="try again"
//     }else{
//     document.querySelector("#register").innerHTML="success"
//     setCookie(result.message.email,result.token)
//     // return setCookie(result.user.email,result.token)
//     }

// }catch(err){
//     document.querySelector(".errmessage2").innerHTML=result.errmessage  
//     document.querySelector("#register").innerHTML="try again"
// }

// }






// document.addEventListener("DOMContentLoaded",()=>{
//     document.querySelector("#register").onclick=()=>{
//         event.preventDefault()
//         const email=document.querySelector(".email").value
//         const phone_number=document.querySelector("#number").value
//         const purpose=document.querySelector("select").value
//         const password=document.querySelector(".password").value
//         if(!email)return document.querySelector(".errmessage2").innerHTML="Email is required"
//         if(!phone_number)return document.querySelector(".errmessage2").innerHTML="phone number is required"
//         if(!purpose)return document.querySelector(".errmessage2").innerHTML="your purpose of buying videos is required"
//         if(!password)return document.querySelector(".errmessage2").innerHTML="password is required"
//         if(password.length < 8)return document.querySelector(".errmessage2").innerHTML="password length must be greater than 8"
//         document.querySelector(".errmessage2").innerHTML=""
//         registerUser(email,phone_number,purpose,password)
//     }
// })






const setCookie=(email, token)=> {
    // alert("called")
      const d = new Date();
      d.setTime(d.getTime() + 24*60*60*100);
      let expires = "expires="+ d.toUTCString();
      document.cookie=`email=${email} ; ${expires}`
      document.cookie = `token=${token} ; ${expires}`;
      window.location.replace("/videos.html")
    } 
  
  


const registeruser=async(Email,fullName,PhoneNumber,purpose,Password)=>{
    const input=document.querySelectorAll("input")
input.forEach(input=>input.style.border="1px solid rgb(36, 35, 35)")
    try{
     document.querySelector(".submit").innerHTML="Proccessing"
    const response=await fetch("/api/register",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({email:Email,phone_number:PhoneNumber,purpose,password:Password })
    })
    const result=await response.json()
    console.log(result)
   if(result.error){
    document.querySelector(".errmessage").innerHTML=result.errMessage
    document.querySelector(".submit").innerHTML="Try again"
   } else{
    document.querySelector(".submit").innerHTML="Success"
    setCookie(result.message.email,result.token)
    
   }

}catch(err){
    document.querySelector(".errmessage").innerHTML=err.message
}
    }
    


document.querySelector(".submit").onclick=()=>{
    const email=document.querySelector("#email").value 
    const phoneNumber=document.querySelector("#phoneNumber").value 
    const purpose=document.querySelector("select").value
    // const millitaryId=document.querySelector("#millitaryId").value
    const password=document.querySelector("#password").value
    const confirmPassword=document.querySelector("#password2").value
    const fullName=document.querySelector("#fullName").value

    if(!email) { 
        document.querySelector(".errmessage").innerHTML="Email is required" 
        document.querySelector("#email") .style.border="2px solid red"
        return
}   
if(!fullName) { 
    document.querySelector(".errmessage").innerHTML="full name is required" 
    document.querySelector("#fullName") .style.border="2px solid red"
    return
}  
    
    if(!phoneNumber){
        document.querySelector(".errmessage").innerHTML="Phone number is required"
        document.querySelector("#phoneNumber") .style.border="2px solid red"
        return
    }

    if(!purpose){
        document.querySelector(".errmessage").innerHTML="Please select your purpose of buying videos"
        document.querySelector("select") .style.border="2px solid red"
        return
    }

    // if(!millitaryId){
    //     document.querySelector(".errmessage").innerHTML="Millitary Id is required"
    //     document.querySelector("#millitaryId").style.border="2px solid red"
    //    return
    // }

    if(!password){
        document.querySelector(".errmessage").innerHTML="Password is required"
        document.querySelector("#password").style.border="2px solid red"
return
    }
    if(password.length<=7){
        document.querySelector(".errmessage").innerHTML="Password must be atleast 8 characters"
        document.querySelector("#password").style.border="2px solid red"
return
    }

    if(!confirmPassword){
        document.querySelector(".errmessage").innerHTML="Please confirm Password"
        document.querySelector("#password2").style.border="2px solid red"
return
    }

    if(password !== confirmPassword){
        document.querySelector(".errmessage").innerHTML="Password must match"
        document.querySelector("#password2").style.border="2px solid red"
        document.querySelector("#password").style.border="2px solid red"
return
    }

    registeruser(email,fullName,phoneNumber,purpose,password)
    
}


document.onkeyup=(event)=>{
    event.target.style.border="1px solid rgb(36, 35, 35)"
    document.querySelector(".errmessage").innerHTML=""
}
document.querySelector("select").onchange=(event)=>{
    event.target.style.border="1px solid rgb(36, 35, 35)"
    document.querySelector(".errmessage").innerHTML=""
}



