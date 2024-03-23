let nav = document.querySelector("nav")
let backTopBtn = document.querySelector(".back-top-btn")


window.addEventListener("scroll",()=>{
 nav.classList.add("scroll");
if (scrollY > 250){
 backTopBtn.style.display = "block"
} else {
  backTopBtn.style.display = "none"
}})

backTopBtn.addEventListener("click",()=>{
  document.documentElement.scrollTop = 0;
})
