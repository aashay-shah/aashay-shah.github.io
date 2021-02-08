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

// Portfolio Popups

(() => {
  const portfolioItemsContainer = document.querySelector(".portfolio-items");
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const popup = document.querySelector(".portfolio-popup");
  const proejctDetailsContainer = document.querySelector(".pp-details");
})();
