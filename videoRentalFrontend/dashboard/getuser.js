function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}


(getuser=async()=>{
  // try{
  const token=getCookie("token")
  const email=getCookie("email")
  const response= await fetch("/api/login/getuser",{
method:"POST",
headers:{"content-type":"application/json"},
body:JSON.stringify({email,token})
    })
    const result=await response.json()
    console.log(result)
    if(result.error)return window.location.href("/")
    document.querySelector(".phone").innerHTML=`Phone number:${result.user.phone_number}`
    document.querySelector(".email").innerHTML=` Email:${result.user.email}`
     document.querySelector(".balance2").innerHTML=`Available Balance:₦${result.user.balance}.00`
    // document.querySelector(".balance2").innerHTML=`Available balance:#${result.user.balance}.00`
    // document.querySelector(".balance3").innerHTML=`Available balance:#${result.user.balance}.00`
    // document.querySelector(".abalance").innerHTML=`Available balance:#${result.user.balance}.00`
  }
  // catch(err){
  // document.body.innerHTML="<h1 style='color:red'>An error occured it might be network error please refresh</h1>"
  // }
 
// }
)()



