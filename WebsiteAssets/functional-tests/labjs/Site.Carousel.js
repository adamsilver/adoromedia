var Site = Site || {};
Site.Carousel = new (function(){
	$(init);
	
	function init() {
		$("div.carousel").css("display", "block");
		var c = new Adoro.Carousel(document.getElementById("carousel"));
		var c = new Adoro.Carousel(document.getElementById("carousel2"));
		var c = new Adoro.Carousel(document.getElementById("carousel3"));
	};
	
});