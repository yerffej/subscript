function anchorLinkHandler(e) {
    const headerSize = document.getElementById('header').clientHeight
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top) - headerSize;
    
    e.preventDefault();
    e.target.blur()
    const targetID = this.getAttribute("href");
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);


    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
    // window.scrollTo({ top: originalTop, behavior: "smooth" });
    // targetAnchor.scrollIntoView({behavior:"smooth"});
    const checkIfDone = setInterval(function() {
        console.log('checkifdone run')
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = "-1";
            targetAnchor.focus({preventScroll: true});
            window.history.pushState("", "", targetID);
            clearInterval(checkIfDone);
        }
    }, 100);
}

const linksToAnchors = document.querySelectorAll('a[href^="#"]');

linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));

// it could probably work in two dimensions too... that'd be kinda cool.

let mainNavLinks = document.querySelectorAll(".nav a");
let mainSections = document.querySelectorAll(".page-content");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop + 154 &&
      section.offsetTop + section.offsetHeight - 154 > fromTop
    ) {
      link.classList.add("current");
	//   section.focus();
    } else {
      link.classList.remove("current");
	//   section.focus();
    }
  });
});