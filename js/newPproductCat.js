
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
let popFlag = true
    let popVideo = document.querySelector(".popUpVideo video");
            let popUpVideoIcon = document.querySelector(".popUpVideoIcon");
            let closePop = document.querySelector(".closePop");
            let popUpVideo = document.querySelector(".popUpVideo");
            popUpVideoIcon.addEventListener("click" , function (params) {
                if (popFlag) {
                    popUpVideo.classList.add("activePop")
                    popFlag = !popFlag;
                    popVideo.play();
                }
            })
            closePop.addEventListener("click" , function (params) {
                if (!popFlag) {
                    popUpVideo.classList.remove("activePop")
                    popFlag = !popFlag;
                    popVideo.pause();

                }
            })
