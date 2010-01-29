$.namespace("SF");
SF.Flyout = new (function() {
	
	$(document).ready(init);
	
	function init() {
		var flyoutDivs = $("div.flyout");
		for(var i = flyoutDivs.length-1; i>=0; i--) {
			new Flyout(flyoutDivs[i]);
		};
	};
	
	function Flyout(container) {
		// nodes
		var primary = $(container).find(".primary")[0] || null;
		var secondary = $(container).find(".secondary")[0] || null;
		
		// info
		var className = container.className;

		var secondaryWidth = $(secondary).width(); // calculate width of element and set it.
		var secondaryWidthIncPadding = $(secondary).outerWidth();
		var secondaryHeightIncPadding = $(secondary).outerHeight();
		
		// not sure it should have a width defined here
		//$(secondary).css("width",$(secondary).width()+"px");
		
		// apply styles - container
		$(container).css("position", "relative");
		
		// apply styles - primary
		$(primary).css({
			"z-index": "2",
			"background-color": "#fff",
			"position":"relative"
		});
		
		// apply styles - secondary
		$(secondary).css({
			"position":"absolute",
			"z-index":"1"
		});
		
		function getShownCssProperties() {
			var p = {};
			if($(container).hasClass("flyLeft")) {
				p = { "left": -secondaryWidthIncPadding+"px", "top": "0px" };
			}
			// right
			else if($(container).hasClass("flyRight")) {
				p = { "left": secondaryWidthIncPadding+"px", "top": "0px" };			
			}
			// down
			else if($(container).hasClass("flyDown")) {
				p = { "left": "0px", "top": $(primary).outerHeight()+"px" };
			}
			// up
			else {
				p = { "left": "0px", "top": -secondaryHeightIncPadding+"px" };
			}
			return p;
		};
		
		function getHiddenCssProperties() {
			return {"left": "0px", "top": "0px", "z-index": "1"};
		};
		

		// apply events
		$(container).bind("mouseenter", show);
		$(container).bind("mouseleave", hide);
				
		$(secondary).css(getHiddenCssProperties());
			
		function show() {
			$(container).parent().css("z-index", "10");
			$(container).css({"z-index": "13"});
			$(secondary).animate(getShownCssProperties(), {queue: false});
		};
		
		function hide() {
			$(container).css({"zIndex": "1"});
			$(secondary).animate(getHiddenCssProperties(), {queue: false, complete: function(){
				$(container).parent().css("z-index", "1");
			}});
		};		

	};
	
	
	
	
});