const fadeInElements = (...elements) => {
    for (let eleType of elements) {
        for(let ele of eleType) fadeIn(ele)
    }
}

const svgPath = document.querySelectorAll('#subscript-svg .path');

const svgText = ready(() => {

        const articles = document.getElementsByTagName('article')
        const navs = document.getElementsByClassName('nav')
        const border = document.getElementsByClassName('border')
        for(let article of articles) {
            article.style.opacity = 0
        }
        for(let nav of navs) {
            nav.style.opacity = 0
        }
        anime({
            targets: svgPath,
            // loop: true,
            // direction: 'alternate',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 500,
            delay: (el, i) => { return i * 150 + 1000 },
            complete: () => {
                fadeInElements(articles, navs, border)
            }
        })
});


// option to fade in rest of content after animation ends
function fadeIn(el) {
    el.style.opacity = 0;
    
    var last = +new Date();
    var tick = function() {
        el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
        last = +new Date();
    
        if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };
    
    tick();
    }

