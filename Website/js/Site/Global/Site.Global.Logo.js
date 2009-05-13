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
		
		var originalBackgroundColour = logo.getStyle("background-color");
		
		function fadeInToColour(colour){
			logo.animate( { "background-color": J2.Core.CSSColor.prototype.create(colour.getHex()), time: 200 } );
		}
		
		Site.Global.CustomEvents.navItemMouseLeft.listen(fadeInToOriginal)
		
		function fadeInToOriginal(){
			logo.animate( { "background-color": J2.Core.CSSColor.prototype.create(originalBackgroundColour.getHex()), time: 200 } );
		};
	});
});