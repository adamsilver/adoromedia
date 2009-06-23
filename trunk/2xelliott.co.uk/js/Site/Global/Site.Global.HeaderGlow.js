var Site = Site || {};
Site.Global = Site.Global || {};
Site.Global.HeaderGlow = new (function(){
	$(document).ready(init);
	
	var glow,
		imgUrlPre= "url(img/glow/top_",
		imgUrlAft= ".png)",
		defaultBackgroundUrl;
	
	function init() {
		glow = document.getElementById("glow");
		if(!glow) return;
		
		defaultBackgroundUrl = $(glow).css("background-image");
		
		$.subscribe(Site.Global.CustomEvents.navMouseover, changeGlow);
		$.subscribe(Site.Global.CustomEvents.navMouseout, changeGlowBack);
	};
	
	function changeGlow(e) {
		$(glow).animate({opacity: 0}, {queue: false,duration: 125, complete: function(){
			$(glow).css("background-image",imgUrlPre+getColourFromText(e.data[0])+imgUrlAft);
			$(glow).animate({opacity: 1}, {queue: false, duration: 125});
		}});
	};
	
	function changeGlowBack(e) {
		$(glow).animate({opacity: 0}, {queue: false, duration: 125, complete: function(){
			$(glow).css("background-image",defaultBackgroundUrl);
			$(glow).animate({opacity: 1}, {queue: false,duration: 125});
		}});
	};
	
	function getColourFromText(text) {
		return colours[text];
	};
	
	var colours = {
		"Home": "pink",
		"Team": "yellow",
		"Projects": "blue",
		"Services": "green",
		"About": "purple",
		"Contact":"orange"
	};
	
});