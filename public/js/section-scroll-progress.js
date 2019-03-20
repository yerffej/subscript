
// 
let mainNavLinks;

const scrollProgressInit = () => {
  mainNavLinks = document.querySelectorAll(".nav a, .logo");
  applyProgressClasses();
}

const applyProgressClasses = () => {
  
  let fromTop = window.scrollY;
  mainNavLinks.forEach(link => {
      let section = document.querySelector(link.hash);
  
      if (
        section.offsetTop <= fromTop + 354 &&
        section.offsetTop + section.offsetHeight - 354 > fromTop
      ) {
        link.classList.add("current");
        section.classList.add("current");
      //   section.focus();
      } else {
        link.classList.remove("current");
        section.blur();
        section.classList.remove("current");
      //   section.focus();
      }
  });
}

  // need to add a scroll buffer with lodash
  window.addEventListener("scroll", event => {
    applyProgressClasses()
  });

// run on load
ready(scrollProgressInit);