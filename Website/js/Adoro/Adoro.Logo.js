if(typeof Adoro !== "object") var Adoro = {};
Adoro.Logo = new (function() {
	addDOMReadyEvent(function(){
		var logo = document.getElementById("logo");
		logo.addEvent("mouseenter", fadeOut);
		logo.addEvent("mouseleave", fadeIn);
		function fadeOut() {
			this.animate( {	opacity: 0.4}, 500);
		}
		
		function fadeIn() {
			this.animate( {	opacity: 1}, 500);
		}
	
	});
});