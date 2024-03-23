let nav = document.querySelector("nav")
let backTopBtn = document.querySelector(".back-top-btn")


window.addEventListener("scroll",()=>{
if (scrollY > 250){
 backTopBtn.style.display = "block"
 nav.classList.add("scroll");
} else {
  backTopBtn.style.display = "none"
  nav.classList.remove("scroll");
}})

backTopBtn.addEventListener("click",()=>{
  document.documentElement.scrollTop = 0;
})
