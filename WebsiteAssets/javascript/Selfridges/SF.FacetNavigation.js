$.namespace("SF");
/**
 * SF.FacetNavigation constructs the accordion styled navigation.
 * @constructor
 * @static
 */
SF.FacetNavigation = new (function(){

	var root = null;
	var maxItems = Salmon.PageContext.SECNAVITEMCOUNT;

	$(document).ready(init);
	
	function init() {
		root = document.getElementById("facetNavigation");
		if(!root) return;
		prepareCarousels();
		prepareAccordion();
	}
	
	function prepareAccordion() {
		var anchors = $(root).find("div.facets div.header h3 a");
		var accordion = new Adoro.Accordion(anchors, {animate: true, alwaysOpen: false});
		var headers = $(root).find("div.facets div.header");
		for(var i = headers.length-1; i>=0; i--) {
			new AccordionTrigger(headers[i]);
		}
	}
	
	
	/*
	 * @class Represents an accordion trigger
	 * @constructor 
	 * @name AccordionTrigger
	 * @param {Node} root The root node that contains the trigger and the anchor
	 */
	function AccordionTrigger(root) {
		var trigger = $(root).find("p.selected a")[0] || null;
		var anchor = $(root).find("h3 a")[0] || null;
		if(!trigger || !anchor) return null;
		$(trigger).bind("click", actionAccordion);
		
		/**
		* Action accordiona
		* @function
		* @private
		* @memberOf AccordionTrigger
		* @name actionAccordion
		*/				
		function actionAccordion() {
			$(anchor).trigger("click");
			return false;
		}
	}
	
	function prepareCarousels() {
		var options = $(root).find("div.options"),
		lis, 
		option,
		clip;
			
		for(var i = 0; i < options.length; i++) {
			option = options[i];
			lis = $(option).find("ul li");
			if(lis.length <= maxItems) continue;
			clip = $(option).find("div.clip")[0];
			
			var backContainer = document.createElement("div");
			backContainer.className = "backContainer";
			$(option).prepend(backContainer);
		
			var forwardContainer = document.createElement("div");
			forwardContainer.className = "forwardContainer";
			$(option).append(forwardContainer);
			
			$(clip).css("height", getClipHeight(lis[0]));
			$(clip).css("padding-top", "0px");
			
			new Adoro.Carousel(option, {
				vertical:true, 
				scrollCount: 1, 
				indicators: false, 
				startButton: false, 
				stopButton: false,
				backButtonAppendTo: backContainer,
				forwardButtonAppendTo: forwardContainer,
				onMoveForwards: function(params){
					if(params.currentSlideIndex === (params.lisLength) - maxItems) {
						return false;
					}
					return true;
				}
			})
		}	
	}
	
	function getClipHeight(li) {
		return maxItems * $(li).outerHeight(true) +  "px";
	}	
	
});