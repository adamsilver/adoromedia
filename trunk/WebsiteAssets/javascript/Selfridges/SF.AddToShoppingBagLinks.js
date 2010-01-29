$.namespace("SF");
/**
 * AddToShoppingBagLinks will allow search and bind ajax events for all links
 * @constructor
 * @static
 * @name SF.AddToShoppingBagLinks
 */
SF.AddToShoppingBagLinks = new (function(){
	$(document).ready(init);
	
	/*
	 * Initialise - search for all links and create instances
	 * @param void
	 * @return void
	 */
	function init() {
		var links = $("li.buy a");
		for(var i = links.length-1; i>=0; i--) {
			new LinkHandler(links[i]);
		};
	};
	
	/**
	* Create a new LinkHandler
	* @class Represents a add to shopping bag link
	* @constructor
	* @name LinkHandler
	* @param {Node} link The anchor node
	*/	
	function LinkHandler(link){
		$(link).bind("click", linkClick);
		
		function linkClick(e) {
			$.ajax({
				url: this.rel,
				type: "get", 
				dataType: "json",
				success: success
			});
			return false;
		};
		
		function success(data) {
			$.publish(Salmon.UI.CustomEvents.productAddedToShoppingBag, data);
		}
	};
});