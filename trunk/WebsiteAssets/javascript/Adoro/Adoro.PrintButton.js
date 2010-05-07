var Adoro = Adoro || {};
/**
 * @class Create a new print button.
 * @constructor
 * @param {Node} anchor The HTML element - ideally this should be an anchor.
 */
Adoro.PrintButton = new (function() {
	function print(e) {
		window.print();
		return false;
	}
	
	function PrintButton(anchor) {
		if(!anchor) return;
		$(anchor).bind("click", print);
	}
	
	return PrintButton;
});
