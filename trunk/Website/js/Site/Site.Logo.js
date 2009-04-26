if(typeof Site !== "object") var Site = {};
Site.Logo = new (function() {
	addDOMReadyEvent(function(){
		var logo = document.getElementById("logo");
		logo.addEvent("mouseenter", fadeOut);
		logo.addEvent("mouseleave", fadeIn);
		function fadeOut() {
			this.animate( {	opacity: 0.7}, 500);
		}
		
		function fadeIn() {
			this.animate( {	opacity: 1}, 500);
		}
	
	});
});