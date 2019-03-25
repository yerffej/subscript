
// New version -- collapser is the collapse
ready(() => {
    let collapsers = document.getElementsByClassName('collapse-trigger');
    for(let collapser of collapsers) {
        collapser.addEventListener("click", (e) => {
            if(e.target.href) {
                return true;
            }
            toggleClass(collapser, 'collapsed');
        }, false)
    }
})






/* old markup version (collapser inside of collapsed)
ready(() => {
    let collapsers = document.getElementsByClassName('collapsed');
    for(let collapser of collapsers) {
        let trigger = collapser.querySelectorAll('.collapse-trigger');
        // console.log('trigger set', trigger);
        // console.log('collapser set', collapser);
		if(trigger && trigger.length) {
			trigger[0].onclick = () => {
				toggleClass(collapser, 'collapsed');
			}
        }
    }
})

*/