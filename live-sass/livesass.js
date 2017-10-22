function livesass() {
	if (typeof(selector) !== 'undefined') {
		removeStyle(selector);
	}
}

function removeStyle(selector) {
	var component = document.querySelector(selector);
	if (component !== null) {
		var encapsulationAttr = component.getAttributeNames()[0];
		var match = encapsulationAttr.match(/_nghost-(.*)/i);
		if (match) {
			var id = match[1];
			for (let stl of document.getElementsByTagName('style')) {
				if (stl.firstChild.data.indexOf('_ngcontent-' + id) >= 0) {
					stl.parentNode.removeChild(stl);
				}
			}
		}
	}
}