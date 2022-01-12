

// function setCookie(email, token) {
//   // alert("called")
//     const d = new Date();
//     d.setTime(d.getTime() + 24*60*60*1000);
//     let expires = "expires="+ d.toUTCString();
//     document.cookie=`email=${email} ; ${expires}`
//     document.cookie = `token=${token} ; ${expires}`;
//     window.location.href="/videos.html"
//   } 



// const loginUser=async(email,password)=>{
 

//  try{

//  document.querySelector("#login").innerHTML="proccessing..."
//   const response= await fetch("/api/login",{
// method:"POST",
// headers:{"content-type":"application/json"},
// body:JSON.stringify({email,password})
//     })
//     const result=await response.json()
//     console.log(result)
//     if(result.error){
//       document.querySelector(".errMessage").innerHTML=result.errMessage
//       document.querySelector("#login").innerHTML="try again"
//     }
//      return setCookie(result.user.email,result.token)
//   }catch(err){
//     // document.querySelector(".errMessage").innerHTML="an error occured please try again"
//     document.querySelector("#login").innerHTML="try again"
//   }
// }

// //response gotten

// // loginUser("email@gmail.com","password")

// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(';');
//   for (let i = 0; i < ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//           c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//           return c.substring(name.length, c.length);
//       }
//   }
//   return "";
// }




// document.addEventListener("DOMContentLoaded",()=>{
//     document.querySelector("#login").onclick=()=>{
//       event.preventDefault()
//     const email=document.querySelector("#email")
//     const password=document.querySelector("#password")
//     if(!email.value)return document.querySelector(".errMessage").innerHTML="Email is required"
//     if(!password.value)return document.querySelector(".errMessage").innerHTML="Password is required"
//     if(password.value.length < 8)return document.querySelector(".errMessage").innerHTML="Password must be greater than 8 characters"

//     document.querySelector(".errMessage").innerHTML=""

//     loginUser(email.value,password.value)
//     }
// })








// const signUpButton = document.getElementById("signUp");
// const signInButton =document.getElementById("login");
// const container = document.getElementById("container");

// signUpButton.addEventListener("click", () => {
//   container.classList.add("right-panel-active");
// });

// // signInButton.addEventListener("click", () => {
// //   container.classList.remove("right-panel-active");
// // });

// document.addEventListener("DOMContentLoaded",()=>{
//   document.querySelector(".ghost").onclick=()=> container.classList.remove("right-panel-active");

// })









let Redirect;

const setCookie=(email, token,newUser)=> {
    // alert("called")
      const d = new Date();
      d.setTime(d.getTime() + 24*60*60*1000);
      let expires = "expires="+ d.toUTCString();
      document.cookie=`email=${email} ; ${expires}`
      document.cookie = `token=${token} ; ${expires}`;
      window.location.href="/videos.html"
 } 

 const setCookie2=(email, token,newUser)=> {
    // alert("called")
      const d = new Date();
      d.setTime(d.getTime() + 24*60*60*1000);
      let expires = "expires="+ d.toUTCString();
      document.cookie=`email=${email} ; ${expires}`
      document.cookie = `token=${token} ; ${expires}`;
      window.location.href="/setUp.html"
 } 
  

const loginUser=async(Email,Password)=>{
    try{
        document.querySelector(".errmessage").innerHTML=""
        document.querySelector(".submit").innerHTML="logging..."

const response=await fetch("/api/login",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({email:Email,password:Password })
})
const result=await response.json()

// console.log(result)
if(result.error){
    document.querySelector(".submit").innerHTML="try again"
    document.querySelector(".errmessage").innerHTML=result.errMessage
   return
} else{

document.querySelector(".submit").innerHTML="success"
console.log(result)
 setCookie(result.user.email,result.token)
}

    }catch(err){
        document.querySelector(".errmessage").innerHTML=err.message
    }
}


document.querySelector(".submit").onclick=()=>{
    // document.querySelector("#password").style.border="2px solid #fff"
    // document.querySelector("#email").style.border="1.5px solid #fff"

    const email=document.querySelector("#email").value 
    const password=document.querySelector("#password").value
    // const millitaryId=document.querySelector("#millitaryId").value
    if(!email){
        document.querySelector(".errmessage").innerHTML="your Email is required"
        document.querySelector("#email") .style.border="2px solid red"
        return 
    }
    if(!password){
        document.querySelector(".errmessage").innerHTML="your Password is required"
        document.querySelector("#password").style.border="2px solid red"
        return
    }
    if(password.length <=7) {
         document.querySelector(".errmessage").innerHTML="Password must be atleast 8 characters"
         document.querySelector("#password").style.border="2px solid red"
    }
    // if(!millitaryId){
    //     document.querySelector(".errmessage").innerHTML="Millitary Id is required"
    //     document.querySelector("#millitaryId").style.border="2px solid red"
    //    return
    // }
loginUser(email,password)
}


document.querySelector("#email").onkeyup=()=>{
    document.querySelector(".errmessage").innerHTML=""
    document.querySelector("#email").style.border="1.5px solid #fff"
}

document.querySelector("#password").onkeyup=()=>{
    document.querySelector(".errmessage").innerHTML=""
    document.querySelector("#password").style.border="1.5px solid #fff"
}

// document.querySelector("#millitaryId").onkeyup=()=>{
//     document.querySelector(".errmessage").innerHTML=""
//     document.querySelector("#millitaryId").style.border="1.5px solid #fff"
// }













  