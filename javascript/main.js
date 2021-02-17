//jshint esversion:6

// About Section Tabs

(() => {
  const aboutSection = document.querySelector(".about-section");
  const tabsContainer = document.querySelector(".about-tabs");

  tabsContainer.addEventListener("click", (event) => {
    if(event.target.classList.contains("tab-items") && !event.target.classList.contains("active")){
      const target = event.target.getAttribute("data-target");
      tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
      event.target.classList.add("outer-shadow", "active");
      aboutSection.querySelector(".tab-content.active").classList.remove("active");
      aboutSection.querySelector(target).classList.add("active");
    }
  });
})();

// Testimonial Section Slider

(() => {
  const sliderContainer = document.querySelector(".testi-slider-container");
  const slides = sliderContainer.querySelectorAll(".testi-item");
  const slideWidth = sliderContainer.offsetWidth;
  const prevBtn = document.querySelector(".testi-slider-nav .prev");
  const nextBtn = document.querySelector(".testi-slider-nav .next");
  const activeSlide = sliderContainer.querySelector(".testi-item.active");
  let slideIndex = Array.from(activeSlide.parentElement.children).indexOf(activeSlide);

  slides.forEach((slide) => {
    slide.style.width = slideWidth + "px";
  });

  sliderContainer.style.width = slideWidth * slides.length + "px";

  nextBtn.addEventListener("click", () =>{
    if(slideIndex === slides.length-1){
      slideIndex = 0;
    }
    else{
      slideIndex++;
    }
    slider();
  });

  prevBtn.addEventListener("click", () =>{
    if(slideIndex === 0){
      slideIndex = slides.length-1;
    }
    else{
      slideIndex--;
    }
    slider();
  });

  function slider(){
    sliderContainer.querySelector(".testi-item.active").classList.remove("active");
    slides[slideIndex].classList.add("active");
    sliderContainer.style.marginLeft = - (slideWidth * slideIndex) + "px";
  }
  slider();
})();
