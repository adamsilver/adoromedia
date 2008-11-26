if(typeof Adoro !== "object") var Adoro = {};
$(document).ready(function(){
	Adoro.Logo = new (function() {
		var logo = document.getElementById("logo");
		if(logo===null) return;
		$(logo).bind("mouseenter", fadeOut);
		$(logo).bind("mouseleave", fadeIn);
		
		function fadeOut() {
			$(logo).animate({"opacity":"0.7"});
		}
		
		function fadeIn() {
			$(logo).animate({"opacity":"1"});
		}
	});
});
			


					
					
					