function anchorLinkHandler(e) {
    const headerSize = document.getElementById('header').clientHeight
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top) - headerSize;
    
    e.preventDefault();
    e.target.blur()
    const targetID = this.getAttribute("href");
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);


    // var bodyHeight = document.body.getBoundingClientRect().height;
    // var eleHeight = targetAnchor.getBoundingClientRect().height;
    // var eleBottom = targetAnchor.getBoundingClientRect().bottom;
    // var targetLoc = bodyHeight- eleBottom - eleHeight - headerSize;

    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
    // window.scrollTo({ top: targetLoc, behavior: "smooth" });
    // targetAnchor.scrollIntoView({behavior:"smooth"});
    const checkIfDone = setInterval(function() {
        // console.log('checkifdone run')
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