const newContactUsSlider = new Swiper(".newContactUsSlider", {
  slidesPerView: 1,
  loop: false,
  speed: 1000,
  allowTouchMove: false,
  mousewheel:true,
});

let btnForm = document.querySelectorAll(".btnForm")
for (let i = 0; i < btnForm.length; i++) {
  const element = btnForm[i];
 
  element.addEventListener("click" , function(params) {
    console.log(i);
    newContactUsSlider.slideTo(i+1,800);
  })
}



let headerFlag = true;
let barIcon = document.querySelector(".barIcon")
let headerContainer = document.querySelector(".headerContainer")
let closeHeader = document.querySelector(".closeHeader")
barIcon.addEventListener("click" , function(params) {
    if (headerFlag) {
        
        headerContainer.classList.add("activeContainer")
        headerFlag=!headerFlag
    }
})

closeHeader.addEventListener("click" , function(params) {
    if (!headerFlag) {
        
        headerContainer.classList.remove("activeContainer")
        headerFlag=!headerFlag
    }
})
let searchIcon=document.querySelector(".searchIcon")
let searchFormPage=document.querySelector(".searchFormPage")
let closeSearch=document.querySelector(".closeSearch")
let seachFlag = true
searchIcon.addEventListener("click" , function(params) {
  if (seachFlag) {
    searchFormPage.classList.add("openSearch")
    seachFlag=!seachFlag;
  }

})
closeSearch.addEventListener("click" , function(params) {
  searchFormPage.classList.remove("openSearch")
  seachFlag=!seachFlag;
})