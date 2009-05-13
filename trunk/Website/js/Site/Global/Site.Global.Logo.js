var Site = Site || {};
Site.Global = Site.Global || {};
Site.Global.Logo = new (function() {
	addDOMReadyEvent(function(){
		var animationTime = 100;
		var logo = document.getElementById("logo");
		var a = logo.getElementsByTagName("a")[0];
		logo.addEvent("mouseenter", fadeOut);
		logo.addEvent("mouseleave", fadeIn);
		function fadeOut() {
			this.animate( {	opacity: 0.7}, 500);
		};
		
		function fadeIn() {
			this.animate( {	opacity: 1}, 500);
		};
		
		Site.Global.CustomEvents.navItemMouseEntered.listen(fadeInToColour)
		
		var originalBackgroundColour = a.getStyle("background-color");
			
		function fadeInToColour(colour){
			a.animate({"backgroundColor": {
				to: J2.Core.CSSColor.prototype.create(colour.getHex()),
				time: animationTime
			}});
		}
		
		Site.Global.CustomEvents.navItemMouseLeft.listen(fadeInToOriginal)
		
		function fadeInToOriginal(){
			a.animate({"backgroundColor": {
				to: J2.Core.CSSColor.prototype.create(originalBackgroundColour.getHex()),
				time: animationTime
			}});
		};
	});
});