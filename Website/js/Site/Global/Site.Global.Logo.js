var Site = Site || {};
Site.Global = Site.Global || {};
Site.Global.Logo = new (function() {
	addDOMReadyEvent(function(){
		var logo = document.getElementById("logo");
		logo.addEvent("mouseenter", fadeOut);
		logo.addEvent("mouseleave", fadeIn);
		function fadeOut() {
			this.animate( {	opacity: 0.7}, 500);
		};
		
		function fadeIn() {
			this.animate( {	opacity: 1}, 500);
		};
		
		Site.Global.CustomEvents.navItemMouseEntered.listen(fadeInToColour)
		
		function fadeInToColour(colour){
			alert("fadeInToColour");
			// fade  logo  into colour
		};
		
		Site.Global.CustomEvents.navItemMouseLeft.listen(fadeInToOriginal)
		
		function fadeInToOriginal(){
			alert("fadeInToOriginal");
			// fade  logo  into colour
		};
	});
});