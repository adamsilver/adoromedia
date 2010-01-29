$.namespace("SF");

/*
 * Sets a cookie every time the user loads a new page - except in checkout.
 * The cookie is stored so the user can navigate to the last visited page when
 * the checkout process is complete
 */
SF.LocationHandler = new (function(){
	
	$(setCurrentLocation);
	
	function setCurrentLocation() {
		var section = document.getElementsByTagName("body")[0].className;
		if(section != "checkout" && section != 'myaccount' && section != "shoppingBag" && section != "csr") {
			var location = window.location;
			createCookie("SELFRIDGES_PREVIOUS_LOCATION", location, 7);
		}
	}
	
	function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}
});