var Site = Site || {};
Site.Global = Site.Global || {};
Site.Global.HeaderGlow = new (function(){
	$(document).ready(init);
	
	var glow,
		imgUrlPre= "url(img/glow/top_",
		imgUrlAft= ".png)",
		defaultBackgroundUrl,
		opacityShow = 1,
		opacityHide = 0,
		duration = 125;
	
	function init() {
		glow = document.getElementById("glow");
		if(!glow) return;
		
		defaultBackgroundUrl = $(glow).css("background-image");
		
		$.subscribe(Site.Global.CustomEvents.navMouseover, changeGlow);
		$.subscribe(Site.Global.CustomEvents.navMouseout, changeGlowBack);
	};
	
	function changeGlow(e) {
		$(glow).animate({opacity: opacityHide}, {queue: false,duration: duration, complete: function(){
			$(glow).css("background-image",imgUrlPre+getColourFromText(e.data[0])+imgUrlAft);
			$(glow).animate({opacity: opacityShow}, {queue: false, duration: duration});
		}});
	};
	
	function changeGlowBack(e) {
		$(glow).animate({opacity: opacityHide}, {queue: false, duration: duration, complete: function(){
			$(glow).css("background-image",defaultBackgroundUrl);
			
			$(glow).animate({opacity: opacityShow}, {queue: false,duration: duration});
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