const wrapper = document.querySelector(".wrapper")
const carousel = document.querySelector(".carousel")
const img = document.querySelectorAll("img")
const button = document.querySelectorAll(".button")


let imageIndex = 1,
intervaLid;


const autoslide = () =>{
intervaLid=setInterval(()=>slideImage(++imageIndex),2000)
}

autoslide

const slideImage= ()=>{
    console.log(imageIndex);
    

}



