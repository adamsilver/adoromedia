$.namespace("SF");
/**
 * AddToFittingRoomLinks will allow search and bind ajax events for all links
 * @constructor
 * @static
 * @name SF.AddToFittingRoomLinks
 */
SF.AddToFittingRoomLinks = new (function(){
	$(document).ready(init);
	
	
	/*
	 * Initialise - search for all links and create instances
	 * @param void
	 * @return void
	 */
	function init() {
		var links = $("a.addToFittingRoom");
		for(var i = links.length-1; i>=0; i--) {
			new LinkHandler(links[i]);
		};
	};
	
	/**
	* Create a new LinkHandler
	* @class Represents a add to fitting link
	* @constructor
	* @name LinkHandler
	* @param {Node} link The anchor node
	*/
	function LinkHandler(link) {
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
			$.publish(Salmon.UI.CustomEvents.productAddedToFittingRoom, data);
		};
		
	};	
	
});


