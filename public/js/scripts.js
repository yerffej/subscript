function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  const toggleClass = (el, className) => {
    if (el.classList) {
        el.classList.toggle(className);
      } else {
        var classes = el.className.split(' ');
        var existingIndex = classes.indexOf(className);
      
        if (existingIndex >= 0)
          classes.splice(existingIndex, 1);
        else
          classes.push(className);
      
        el.className = classes.join(' ');
      }
  }