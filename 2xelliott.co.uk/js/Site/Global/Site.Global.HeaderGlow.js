var Site = Site || {};
Site.Global = Site.Global || {};
Site.Global.HeaderGlow = new (function(){
	$(document).ready(init);
	
	var glow,
		defaultBackgroundUrl;
	
	function init() {
		glow = document.getElementById("glow");
		if(!glow) return;
		
		defaultBackgroundUrl = $(glow).css("background-image");
		
		$.subscribe(Site.Global.CustomEvents.navMouseover, changeGlow);
		
	};
	
	function changeGlow(e) {
		$(glow).animate({opacity: 0}, {duration: 125, complete: function(){
			$(glow).css("background-image","url(img/glow/top_blue.png)");
			$(glow).animate({opacity: 1}, {duration: 125});
		}});
	};
	
	function getBgUrl(e) {
	};
	
});