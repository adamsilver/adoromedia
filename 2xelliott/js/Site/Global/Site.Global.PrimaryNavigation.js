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
	
	function NavItem(listItem) {
		var newAnchor = null;
		var height = listItem.offsetHeight;
		setupItem();
		
		function setupItem() {
			$(listItem).css("overflow", "hidden");
			$(listItem).css("position", "relative");	
			$(listItem).css("height", getListItemHeight()+"px");
			$(listItem).bind("mouseenter", listItem_mouseEnter);
			$(listItem).bind("mouseleave", listItem_mouseLeave);
			$(getAnchor()).css("position", "relative");
			$(getAnchor()).css("top", -height+"px");
			createClonedAnchor();
		};
		
		function listItem_mouseEnter(e) {
			$(getAnchor()).animate({
					"top": "0"
				}, 
				{ 
					duration: animationTime
				}
			);
			$(getClonedAnchor()).animate({
					"top": "0"
				}, 
				{ 
					duration: animationTime
				}
			);
		};
		
		function listItem_mouseLeave(e) {
			$(getAnchor()).animate({
					"top": -getListItemHeight()
				}, 
				{ 
					duration: animationTime
				}
			);
			$(getClonedAnchor()).animate({
					"top": -getListItemHeight()
				}, 
				{ 
					duration: animationTime
				}
			);
		};
		
		function getAnchor() {
			return $(listItem).find("a")[0] || null;
		};
		
		function getListItemHeight() {
			return height;
		};
		
		function getClonedAnchor() {
			return newAnchor;
		};
		
		function createClonedAnchor() {
			newAnchor = getAnchor().cloneNode(true);
			listItem.appendChild(newAnchor);
		};
	};
	
});