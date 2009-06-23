var Site = Site || {};
Site.Global = Site.Global || {};
Site.Global.PrimaryNavigation = new (function(){
	$(document).ready(init);
	
	var animationTime = 250;
	
	function init() {
		var nav = document.getElementById("primaryNavigation");
		if(!nav) return;
		
		var navItems = $(nav).find("li");
		
		for(var i = navItems.length-1; i>=0; i--) {
			new NavItem(navItems[i]);
		}
	};
	
	function NavItem(li) {
		var item = $(li).find("a span.wrap")[0] || null;
		var newSpan = null;
		var height = item.offsetHeight;
		setupItem();
		
		function setupItem() {
			$(item).css("overflow", "hidden");
			$(item).css("position", "relative");	
			$(item).css("height", getItemHeight()+"px");
			$(li).bind("mouseenter", item_mouseEnter);
			$(li).bind("mouseleave", item_mouseLeave);
			$(getSpan()).css("position", "relative");
			$(getSpan()).css("top", -height+"px");
			createClonedSpan();
		};
		
		function item_mouseEnter(e) {
			$.publish(Site.Global.CustomEvents.navMouseover, "the colour to change to");
			$(getSpan()).animate({
					"top": "0"
				}, 
				{ 
					duration: animationTime
				}
			);
			$(getClonedSpan()).animate({
					"top": "0"
				}, 
				{ 
					duration: animationTime
				}
			);
		};
		
		function item_mouseLeave(e) {
			$.publish(Site.Global.CustomEvents.navMouseout);
			$(getSpan()).animate({
					"top": -getItemHeight()
				}, 
				{ 
					duration: animationTime
				}
			);
			$(getClonedSpan()).animate({
					"top": -getItemHeight()
				}, 
				{ 
					duration: animationTime
				}
			);
		};
		
		function getSpan() {
			return $(item).find("span")[0] || null;
		};
		
		function getItemHeight() {
			return height;
		};
		
		function getClonedSpan() {
			return newSpan;
		};
		
		function createClonedSpan() {
			newSpan = getSpan().cloneNode(true);
			item.appendChild(newSpan);
		};
	};
	
});