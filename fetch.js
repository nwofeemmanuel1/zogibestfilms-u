// // // // const fetch=require("isomorphic-fetch")

// // // // const registerUser=async(email,phone_number,password)=>{
  
// // // //   const response= await fetch("http://localhost:8080/api/register",{
// // // // method:"POST",
// // // // headers:{"content-type":"application/json"},
// // // // body:JSON.stringify({email,phone_number,password})
// // // //     })
// // // //     const result=await response.json()
// // // //     console.log(result)
// // // // }

// // // // registerUser("email@gmail.com",08060304393,"password")



// // // const fetch=require("isomorphic-fetch")

// // // const registerUser=async(email,token)=>{
  
// // //   const response= await fetch("http://localhost:8080/api/login/getuser",{
// // // method:"POST",
// // // headers:{"content-type":"application/json"},
// // // body:JSON.stringify({email,token})
// // //     })
// // //     const result=await response.json()
// // //     console.log(result)
// // // }

// // // registerUser("email@gmail.com",token)




// // // // const fetch=require("isomorphic-fetch")

// // // // const verifypayment=async(token,email,thumbnail_id)=>{
  
// // // //   const response= await fetch("http://localhost:8080/api/movie/myvideos",{
// // // // method:"POST",
// // // // headers:{"content-type":"application/json"},
// // // // body:JSON.stringify({token,email, thumbnail_id})
// // // //     })
// // // //     const result=await response.json()
// // // //     console.log(result)
// // // // }

// // // // fetchvideos("token","email@gmail.com","60f5f23839266a11fcf2f981")


// // // // const fetch=require("isomorphic-fetch")

// // // // const verifypayment=async(email,amount)=>{
  
// // // //   const response= await fetch("http://localhost:8080/api/admin/verifypayment",{
// // // // method:"POST",
// // // // headers:{"content-type":"application/json"},
// // // // body:JSON.stringify({email, amount})
// // // //     })
// // // //     const result=await response.json()
// // // //     console.log(result)
// // // // }

// // // // verifypayment("emaile@gmail.com",2)











// const fetch=require("isomorphic-fetch")

// const searchforvideo=async(searchKey)=>{
  
//   const response= await fetch("http://localhost:8080/api/listThumbnail/searchforvideo",{
// method:"POST",
// headers:{"content-type":"application/json"},
// body:JSON.stringify({searchKey})
//     })
//     const result=await response.json()
//     console.log(result)
// }

// searchforvideo('queen of love')











// // // // const fetch=require("isomorphic-fetch")

// // // // const fetchPreview=async(token,email,preview_id)=>{
  
// // // //   const response= await fetch("http://localhost:8080/api/movie/buymovie",{
// // // // method:"POST",
// // // // headers:{"content-type":"application/json"},
// // // // body:JSON.stringify({token,email,preview_id})
// // // //     })
// // // //     const result=await response.json()
// // // //     console.log(result)
// // // // }

// // // // fetchPreview("token","email@gmail.com","60f58caadd54310cec0f7e98")
// // let expression=/.*.*/


// // // expression.
// // // var replace = "\\d";
// // var replace = "dynamic";
// // var re = new RegExp(`.*${replace}.*`);
// // console.log(re)



var fs = require('fs'),
    request = require('request');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

download('https://www.google.com/images/srpr/logo3w.png', 'google.png', function(){
  console.log('done');
});