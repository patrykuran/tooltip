(function() {

	globalTooltip = null;

	function assignEvents(elems, eventType, event){

		for(var i = 0; i < elems.length; i++) {

			elems[i].addEventListener(eventType, event, false);

		}

	}


	function createTooltip(text, options) {

		var tooltip = document.createElement('div');
		tooltip.classList.add('tooltip', 'hidden');
		tooltip.textContent = text;

		// we need to render it first to get the element's offsetHeight
		document.body.appendChild(tooltip); 
		
		tooltip.style.top = (options.y - tooltip.offsetHeight - 8) + 'px';
		
		// centers the tooltip horizontally
		tooltip.style.left = options.x + (options.w / 2 ) - (tooltip.offsetWidth / 2) + 'px';

		globalTooltip = tooltip;

		tooltip.classList.remove('hidden');
	}

	function removeTooltip(e) {

		e.target.setAttribute('title', globalTooltip.textContent)
	
		globalTooltip.parentNode.removeChild(globalTooltip);
		
	}

	function showTooltip(e) {

		var options = {

			w: e.target.offsetWidth,
			x: e.target.offsetLeft,
			y: e.target.offsetTop
		
		}

		console.log(options);

		var text = e.target.getAttribute('title');

		createTooltip(text, options);

		e.target.removeAttribute('title');

	}

	function init(elems){

		assignEvents(elems, 'mouseenter', showTooltip);
		assignEvents(elems, 'mouseleave', removeTooltip);

	}

	window.t00ltip = init;

})();