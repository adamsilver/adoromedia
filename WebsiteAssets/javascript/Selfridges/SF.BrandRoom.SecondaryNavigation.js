$.namespace("SF.BrandRoom");
/**
 * Creates the toggler for the brand room navigation
 * @constructor
 * @static
 * @name SF.BrandRoom.SecondaryNavigtion
 */
SF.BrandRoom.SecondaryNavigtion = new (function(){
	$(document).ready(init);
	
	var nav,
		toggler,
		togglerTextOpen,
		togglerTextClosed,
		isOpen = false,
		cssHiddenClass = "hidden",
		anchor;
	
	/*
	 * Initialises the toggler
	 * @function
	 * @private
	 */
	function init() {
		nav = document.getElementById("secondaryNavigation");
		if(!nav) return;
		setStoreText();
		createToggle();
	};
	/*
	 * Creates the toggle and binds events
	 * @function
	 * @private
	 */
	function createToggle() {
		var div = document.createElement("div");
		div.id = "secondaryNavigationToggler";
		anchor = document.createElement("a");
		anchor.innerHTML = togglerTextClosed;
		anchor.href = "#";
		
		$(anchor).bind("click", toggleNav);
				
		div.appendChild(anchor);
		$(nav).before(div);
		
		$(nav).css("display", "none");
		$(anchor).addClass(cssHiddenClass);
	};
	
	/*
	 * Sets the toggler text from server store text
	 * @function
	 * @private
	 */
	function setStoreText() {
		togglerTextOpen = Salmon.StoreText.BRAND_ROOM_NAVIGATION_OPEN;
		togglerTextClosed = Salmon.StoreText.BRAND_ROOM_NAVIGATION_CLOSED;
	};
	
	/*
	 * Toggles the navigation state between open/shut
	 * @function
	 * @private
	 */
	function toggleNav() {
		if(isOpen) {
			closeNav();
		}
		else {
			openNav();
		}
		return false;
	};
	
	/*
	 * Opens the navigation
	 * @function
	 * @private
	 */
	function openNav() {
		isOpen = true;
		$(nav).slideDown();
		$(anchor).removeClass(cssHiddenClass);
		setAnchorText(togglerTextOpen);
	};
	
	/*
	 * Closes the navigation
	 * @function
	 * @private
	 */	
	function closeNav() {
		isOpen = false;
		$(nav).slideUp();
		$(anchor).addClass(cssHiddenClass);
		setAnchorText(togglerTextClosed);
	};
	
	/*
	 * Opens the navigation
	 * @function
	 * @private
	 */
	function setAnchorText(newValue) {
		anchor.innerHTML = newValue;
	};

});