$.namespace("SF");
/**
 * SF.GlobalSearch constructs the global search hide/show button
 * @constructor
 * @static
 * @name SF.GlobalSearch
 */
SF.GlobalSearch = new (function() {
	var hideClass = "hide", searchField, searchButton, searchTerm;
	$(document).ready(init);
	
	/**
	 * Initalises the global search and binds events
	 * @function
	 * @private
	 */
	function init() {
		searchField = document.getElementById("searchbox") || null;
		searchButton = document.getElementById("searchButton") || null;
		if(!searchField || !searchButton) return;
		$(searchField).bind("focus", showButton);
		$(searchField).bind("focus", setText);
		$(searchField).bind("blur", hideButton);
		hideButton();
	};
	
	/**
	 * Shows the button
	 * @function
	 * @private
	 */	
	function showButton() {
		$(searchButton).removeClass(hideClass);
	};
	
	/**
	 * Saves search term
	 * @function
	 * @private
	 */	
	function setText() {
		if(searchField.value == "Search") { 
			clearText();
			return
		}
		
		searchField.value = searchTerm;
		searchField.select();
	};
	
	/**
	 * Clear text box
	 * @function
	 * @private
	 */	
	function clearText() {
		searchField.value = "";
	};
	
	/**
	 * Hides the button
	 * @function
	 * @private
	 */		
	function hideButton() {
		searchTerm = searchField.value;
		if(searchField.value.length === 0 || searchField.value == "Search") {		
			$(searchButton).addClass(hideClass);
		}
	};
});