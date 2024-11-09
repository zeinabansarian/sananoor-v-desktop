$(".containerHorizontal").imagesLoaded({}, function () {
  $(document).ready(function () {
    setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger);
      const pageContainer = document.querySelector(".containerHorizontal");
      /* SMOOTH SCROLL */
      const scroller = new LocomotiveScroll({
        el: pageContainer,
        smooth: true,
      });
      scroller.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(pageContainer, {
        scrollTop(value) {
          return arguments.length
            ? scroller.scrollTo(value, 0, 0)
            : scroller.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: pageContainer.style.transform ? "transform" : "fixed",
      });
      ////////////////////////////////////
      ////////////////////////////////////
      window.addEventListener("load", function () {
        ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
        ScrollTrigger.refresh();
        ScrollTrigger.update();
      });
      document.addEventListener("load", function () {
        ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
        ScrollTrigger.refresh();
        ScrollTrigger.update();
      });
      addEventListener("resize", () => {
        ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
        ScrollTrigger.refresh();
      });
      let pinBoxes = document.querySelectorAll(".Pin-Wrapp > *");
      let pinWrap = document.querySelector(".Pin-Wrapp");
      let pinWrapWidth = pinWrap.offsetWidth;
      let horizontalScrollLength = pinWrapWidth - window.innerWidth;
      console.log("horizontalScrollLength", horizontalScrollLength);
      scrollTween = gsap.to(".Pin-Wrapp", {
        scrollTrigger: {
          scroller: pageContainer, //locomotive-scroll
          scrub: true,
          trigger: "#PinSection",
          pin: true,
          start: "top top",
          end: pinWrapWidth,
        },
        x: horizontalScrollLength,
        ease: "none",
      });
      ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
      ScrollTrigger.refresh();


      const para = new SplitType('.section2 .title2 h2', { types: 'lines,words' });
      let splPara = document.querySelectorAll(".section2 .title2 h2")
      splPara.forEach(element => {
          gsap.from(element.querySelectorAll(".word"), {
              x: -50,
              opacity: 0,
              stagger: 0.1,
              delay: 0,
              duration: 1,
          })
      });

     gsap.to(".section2 .title2 h2", {
            
              opacity: 1,
              delay: 0,
              duration: 0,
          })

      const swiper = new Swiper(".swiper", {
        direction: "vertical",
        loop: true,
        centeredSlides: true,
        slidesPerView: 2.3,
        speed: 1000,
        autoplay: {
          delay: 2000,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            if (index > 9) {
              return (
                '<span class="' +
                className +
                '"><img src="images/iconNewLogo.png" />' +
                index +
                1 +
                "</span>"
              );
            } else {
              return (
                '<span class="' +
                className +
                '"><img src="images/iconNewLogo.png" />' +
                `0${index + 1}` +
                "</span>"
              );
            }
          },
        },
      });
      let firstslideTop = document.querySelectorAll(".projectBox .slideTop")[0];
      gsap.to(firstslideTop, {
        scrollTrigger: {
          trigger: firstslideTop.parentElement,
          start: "right 30%",
          end: "left left",
          containerAnimation: scrollTween,
          scrub: 1,
        },
        y: "-100vh",
      });
      let firstslideBtm = document.querySelectorAll(".projectBox .slideBtm")[0];

      gsap.to(firstslideBtm, {
        scrollTrigger: {
          trigger: firstslideBtm.parentElement,
          start: "right 30%",
          end: "left left",
          containerAnimation: scrollTween,
          scrub: 1,
        },
        y: 0,
      });
      let firstslideLeft = document.querySelectorAll(
        ".projectBox .slideLeft"
      )[0];

      gsap.to(firstslideLeft, {
        scrollTrigger: {
          trigger: firstslideLeft.parentElement,
          start: "right 50%",
          end: "left 90%",
          containerAnimation: scrollTween,
          scrub: 1,
        },
        x: "-100vw",
      });

      document.querySelectorAll(".projectBox .overTitle").forEach((element) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "left 20%",
            end: "left 100%",
            containerAnimation: scrollTween,
            onEnter: () => element.classList.add("activeTitle"),
            onEnterBack: () => element.classList.add("activeTitle"),
            onLeave: () => element.classList.add("activeTitle"),
            onLeaveBack: () => element.classList.remove("activeTitle"),
          },
        });
      });
      document.querySelectorAll(".projectBox .imgS").forEach((element) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "right 60%",
            end: "left 100%",
            containerAnimation: scrollTween,
            onEnter: () => element.classList.add("activeImg"),
            onEnterBack: () => element.classList.add("activeImg"),
            onLeave: () => element.classList.add("activeImg"),
            onLeaveBack: () => element.classList.remove("activeImg"),
          },
        });
      });

    }, 500);
  });
});



let headerFlag = true;
let barIcon = document.querySelector(".barIcon");
let headerContainer = document.querySelector(".headerContainer");
let closeHeader = document.querySelector(".closeHeader");
barIcon.addEventListener("click", function (params) {
  if (headerFlag) {
    headerContainer.classList.add("activeContainer");
    headerFlag = !headerFlag;
  }
});

closeHeader.addEventListener("click", function (params) {
  if (!headerFlag) {
    headerContainer.classList.remove("activeContainer");
    headerFlag = !headerFlag;
  }
});
let popFlag = true;
let popVideo = document.querySelector(".popUpVideo video");
let popUpVideoIcon = document.querySelector(".popUpVideoIcon");
let closePop = document.querySelector(".closePop");
let popUpVideo = document.querySelector(".popUpVideo");
popUpVideoIcon.addEventListener("click", function (params) {
  if (popFlag) {
    popUpVideo.classList.add("activePop");
    popFlag = !popFlag;
    popVideo.play();
  }
});
closePop.addEventListener("click", function (params) {
  if (!popFlag) {
    popUpVideo.classList.remove("activePop");
    popFlag = !popFlag;
    popVideo.pause();
  }
});


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