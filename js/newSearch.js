const blogsearchSlider = new Swiper('.blogsearchSlider', {
    slidesPerView: 3.4,
    // loop: true,
  freeMode:true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.blogNext',
    prevEl: '.blogPrev',
  },

});
const projectsearchSlider = new Swiper('.projectsearchSlider', {
    slidesPerView: 2,
    // loop: true,
    navigation: {
        nextEl: '.projectNext',
        prevEl: '.projectPrev',
      },
  spaceBetween: 194,
  centeredSlides:false,
});

const menu = document.getElementById("menu_wrapper")
body = document.getElementsByTagName('body')[0],
menu.style.transform = `translateX(${body.clientWidth}px)`
function openMenu(){
    menu.style.transform = `translateX(0)`
}
function closeMenu(){
    menu.style.transform = `translateX(${body.clientWidth}px)`
}   

const searchBox = document.getElementById("search_wrapper_body")
body = document.getElementsByTagName('body')[0],
searchBox.style.transform = `translateX(${body.clientWidth}px)`
function openSearch(){
    console.log("sss",searchBox)
    searchBox.style.transform = `translateX(0)`
}
function closeSearch(){
    searchBox.style.transform = `translateX(${body.clientWidth}px)`
}   