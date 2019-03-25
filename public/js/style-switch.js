ready(() => {
    let switchers = document.getElementsByClassName('switch');
    for(let switcher of switchers) {
        switcher.onclick = () => {
            toggleClass(document.body, 'dark');
        }
    }
})

