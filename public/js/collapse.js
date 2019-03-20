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

