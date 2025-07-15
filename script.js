const openMenu = document.querySelector('#menu-open-button');
const closeMenu = document.querySelector('#menu-close-button');
const navLink =  document.querySelectorAll(".nav-link")

openMenu.addEventListener('click',()=>{
    document.body.classList.toggle('show-mobile-menu')
    
})

closeMenu.addEventListener('click',()=>openMenu.click())

navLink.forEach(link=>{
 link.addEventListener('click',()=>openMenu.click())
})



// inally, we need to initialize Swiper in JS:
 
const swiper = new Swiper('.swiper', {
  loop: true,
    spaceBetween: 30, // space between slides (in px)
  autoplay: {
    delay: 3000, // 3 seconds
    disableOnInteraction: false,
  },
  
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  
  }


})
