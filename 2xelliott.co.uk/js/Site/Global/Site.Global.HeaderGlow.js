var Site = Site || {};
Site.Global = Site.Global || {};
Site.Global.HeaderGlow = new (function(){
	$(document).ready(init);
	
	var glow,
		glow2,
		imgUrlPre= "url(img/glow/top_",
		imgUrlPre2 = "url(img/glow/bot_",
		imgUrlAft= ".png)",
		defaultBackgroundUrl,
		defaultBackgroundUrl2,
		opacityShow = 1,
		opacityHide = 0,
		duration = 125;
	
	function init() {
		glow = document.getElementById("glow");
		glow2 = document.getElementById("glow2")
		if(!glow || !glow2) return;
		
		defaultBackgroundUrl = $(glow).css("background-image");
		defaultBackgroundUrl2 = $(glow2).css("background-image");
		$.subscribe(Site.Global.CustomEvents.navMouseover, changeGlow);
		$.subscribe(Site.Global.CustomEvents.navMouseout, changeGlowBack);
	};
	
	function changeGlow(e) {
		$(glow).animate({opacity: opacityHide}, {queue: false,duration: duration, complete: function(){
			$(glow).css("background-image",imgUrlPre+getColourFromText(e.data[0])+imgUrlAft);
			$(glow).animate({opacity: opacityShow}, {queue: false, duration: duration});
		}});
		
		$(glow2).animate({opacity: opacityHide}, {queue: false,duration: duration, complete: function(){
			$(glow2).css("background-image",imgUrlPre2+getColourFromText(e.data[0])+imgUrlAft);
			$(glow2).animate({opacity: opacityShow}, {queue: false, duration: duration});
		}});
	};
	
	function changeGlowBack(e) {
		$(glow).animate({opacity: opacityHide}, {queue: false, duration: duration, complete: function(){
			$(glow).css("background-image",defaultBackgroundUrl);
			
			$(glow).animate({opacity: opacityShow}, {queue: false,duration: duration});
		}});
		
		$(glow2).animate({opacity: opacityHide}, {queue: false, duration: duration, complete: function(){
			$(glow2).css("background-image",defaultBackgroundUrl2);
			
			$(glow2).animate({opacity: opacityShow}, {queue: false,duration: duration});
		}});
	};
	
	function getColourFromText(text) {
		return colours[text];
	};
	
	var colours = {
		"home": "pink",
		"heam": "yellow",
		"projects": "blue",
		"services": "green",
		"about": "purple",
		"contact":"orange"
	};
	
});