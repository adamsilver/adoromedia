var Site = Site || {};
Site.Global = Site.Global || {};
Site.Global.PrimaryNavigation = new (function() {
	//addDOMReadyEvent(init);

	window.addEvent("load", init);
	
	function init() {
		var nav = document.getElementById("primaryNavigation");
		if(!nav) return;
		nav.setStyle("overflow", "hidden");
		
		var navItems = nav.getElementsByTagName("li");
		var a = null;
		for(var i = navItems.length-1; i>=0; i--) {
			a = navItems[i].getElementsByTagName("a")[0];
			if(a.hasCssClass("selected")) continue;
			new NavItem(navItems[i]);
		}
		
	};
	
	function NavItem(item) {
		var cssHoverClass = "hover";
		var animationTime = 230;
		
		item.addEvent("mouseenter", itemMouseEnter);
		item.addEvent("mouseleave", itemMouseLeave);
		
		item.setStyle("overflow", "hidden");
		item.setStyle("position", "relative");		
		
		var height = item.offsetHeight;
	
		item.setStyle("height", height+"px");
				
		var a = item.getElementsByTagName("a")[0];
		a.setStyle("position", "relative");
		
		var a2 = a.cloneNode(true);
		item.insertBefore(a2, a);
		
		a2.setStyle("top", -height+"px");
		a.setStyle("top", -height+"px");
		
		var originalTop = -height;
		
		function itemMouseEnter(e) {
			var colour = a.getStyle("color");
			Site.Global.CustomEvents.navItemMouseEntered.fire(colour);
			a.animate({top: {to: 0, time: animationTime}});
			a2.animate({top: {to: 0, time: animationTime}});
			a.addCssClass(cssHoverClass);
			a2.addCssClass(cssHoverClass);
		};
		
		function itemMouseLeave(e) {
			Site.Global.CustomEvents.navItemMouseLeft.fire();
			a.animate({top: {to: originalTop, time: animationTime}});
			a2.animate({top: {to: originalTop, time: animationTime}});
			a.removeCssClass(cssHoverClass);
			a2.removeCssClass(cssHoverClass);
		};
	};	
	
});