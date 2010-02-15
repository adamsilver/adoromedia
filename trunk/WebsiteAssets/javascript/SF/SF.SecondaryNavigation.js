$.namespace("SF");
/**
 * SF.SecondaryNavigation constructs the accordion styled navigation.
 * @constructor
 * @static
 */
SF.SecondaryNavigation = new (function(){
	$(document).ready(prepare);
	
	var maxItems = Salmon.PageContext.SECNAVITEMCOUNT;
	var root = null;
		
	function prepare() {
		root = document.getElementById("secondaryNavigation");
		if(!root || $(root).hasClass("searchResults")) return;
		
		prepareCarousels();
		
		prepareAccordion();
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
			$(clip).css("height", getClipHeight(lis[0]));
		}		
	}
	
	function getClipHeight(li) {
		return maxItems * $(li).outerHeight({margin:true}) + "px";
	}

	function prepareAccordion() {
		var anchors = $(root).find("div.header h2 a");	
		var accordion = new Adoro.Accordion(anchors, {animate: true, alwaysOpen: false});
		
		//Categories submenu should be open by default on Department and Category pages
		if(document.getElementById("pgCategory") || document.getElementById("pgDepartment")) {
			var catAnchor = $(anchors).get(1);
			$(catAnchor).trigger("click");
			return false;
		}
	}
	
	function actionAccordion() {
		$(anchor).trigger("click");
		return false;
	}
});