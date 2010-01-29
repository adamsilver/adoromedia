$.namespace("SF.BrandBoutique");

/**
 * Creates the exclusives carousel in brand boutique
 * @constructor
 * @static
 * @name SF.BrandBoutique.Exclusives
 */
SF.BrandBoutique.Exclusives = new(function() {
	$(init);
	var node;
	function init() {
		node = $("#brandBoutiqueExclusivesPanel div.carousel")[0] || null;
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
		centerIndicators();
	};
	
	function centerIndicators() {

		var container = $(node).find("div.indicatorsContainer")[0] || null;
		var inner = $(container).find("div.indicatorsContainerInner")[0] || null;
		if(!container || !inner) return;
		
		var containerWidth = $(container).outerWidth();
		var innerWidth = $(inner).outerWidth();
		
		$(inner).css("width", innerWidth+"px");
		$(inner).css("float", "none");
		$(inner).css("margin", "0 " + ((containerWidth-innerWidth)/2).toString() + "px");
	};
});

