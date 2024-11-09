let estelam = document.querySelectorAll(".estelam")
let footerForm = document.querySelector(".footerForm");
let closeFooter = document.querySelector(".closeFooter");
let formContainer = document.querySelector(".formContainer");
let footerFlag=true;
let sliderSectionF = document.querySelectorAll(".sliderSection");
let body = document.querySelector("body")
if (estelam) {
  estelam.forEach(element => {
    
    element.addEventListener("click" , function (params) {
      console.log(footerFlag);
    
        if (footerFlag) {
          window.scrollTo(0, document.body.scrollHeight);
      
          footerFlag=!footerFlag;


          body.style.overflow="hidden"
          footerForm.classList.add("openFooter")
          formContainer.classList.add("formContainerActive")
          console.log("formContainer" , formContainer);
          


            document.querySelector("header").style.zIndex="-1";
            if (document.querySelector(".verticalPagination")) {
              
              document.querySelector(".verticalPagination").style.zIndex="-1"
            }
            
          }
        
    })
  });
}
closeFooter.addEventListener("click" , function (params) {
  console.log("close");
    if (!footerFlag) {
        document.querySelector("header").style.zIndex="100022589955";
        if (document.querySelector(".verticalPagination")) {
          
          document.querySelector(".verticalPagination").style.zIndex="100"
        }
        footerForm.classList.remove("openFooter")
        footerFlag=!footerFlag;
        formContainer.classList.remove("formContainerActive");

        body.style.overflow="auto";
        body.style.overflowX="hidden"

    }
    
})


