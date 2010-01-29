$.namespace("SF.BrandBoutique");

SF.BrandBoutique.UberBrandShowcase = new(function() {
	$(init);
	
	function init() {
		var node = $("#uberBrandShowcase div.carousel")[0] || null;
		if(!node) return;
		
		var backContainer = document.createElement("div");
		backContainer.className = "backContainer";
		$(node).prepend(backContainer);
		
		var forwardContainer = document.createElement("div");
		forwardContainer.className = "forwardContainer";
		$(node).append(forwardContainer);
		
		var indicatorsContainer = document.createElement("div");
		indicatorsContainer.className = "indicatorsContainer";
		$(node).append(indicatorsContainer);
		
		new Adoro.Carousel(node,{ 
			scrollCount: 1, 
			animateSpeed: 1000,
			isCircular: true,
			startButton: true,
			stopButton: true,
			automaticDelay: 2000,
			automatic: true,
			
			backButtonAppendTo: backContainer,
			forwardButtonAppendTo: forwardContainer,
			indicatorsContainerAppendTo: indicatorsContainer,
			indicatorsContainerClass: "indicatorsContainerInner"
		});		
		
	};
});

