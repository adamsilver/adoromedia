$.namespace("SF.BrandBoutique");
/**
 * Creates the gallery (latest looks) carousel in brand boutique
 * @constructor
 * @static
 * @name SF.BrandBoutique.Gallery
 */
SF.BrandBoutique.Gallery = new(function() {
	$(init);
	
	function init() {
		var node = $("#brandBoutiqueGalleryPanel div.carousel")[0] || null;
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
			stopButton: false,
			startButton: false,	
			animateSpeed: 1000,
			isCircular: false,
			backButtonAppendTo: backContainer,
			forwardButtonAppendTo: forwardContainer,
			indicatorsContainerAppendTo: indicatorsContainer,
			indicatorsContainerClass: "indicatorsContainerInner"
		});
		
	};
});

