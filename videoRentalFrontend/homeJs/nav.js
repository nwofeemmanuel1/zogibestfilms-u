document.querySelector(".harmburger").onclick=()=>{
    document.querySelector(".navclose").className="navopen"
}

document.querySelector("#close").onclick=()=>{
    document.querySelector(".navopen").className="navclose"
}

document.addEventListener("DOMContentLoaded",()=>document.querySelector("nav").style.display='none')
window.onscroll=()=>{
    if(window.scrollY ==0){
        document.querySelector("nav").style.display='none'
    }else{
        document.querySelector("nav").style.display='block'
    }
}