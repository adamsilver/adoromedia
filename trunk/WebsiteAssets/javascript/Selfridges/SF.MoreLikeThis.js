$.namespace("SF");
SF.MoreLikeThis = new (function() {
	$(document).ready(function() {
		var carouselRoot = $("div#moreLikeThis").find(".carousel")[0] || null;
		if(!carouselRoot) return;
		
		var backContainer = document.createElement("div");
		backContainer.className = "backContainer";
		$(carouselRoot).prepend(backContainer);
		
		var forwardContainer = document.createElement("div");
		forwardContainer.className = "forwardContainer";
		$(carouselRoot).append(forwardContainer);
		
		var carousel = new Adoro.Carousel(carouselRoot, {
			scrollCount: 1	,
			stopButton: false,
			startButton: false,
			animateSpeed: 300,
			isCircular: false,
			indicators: false,
			backButtonAppendTo: backContainer,
			forwardButtonAppendTo: forwardContainer
		});

	});
});