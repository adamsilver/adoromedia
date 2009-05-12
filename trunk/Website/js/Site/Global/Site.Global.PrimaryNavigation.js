var Site = Site || {};
Site.Global = Site.Global || {};
Site.Global.PrimaryNavigation = new (function() {
	addDOMReadyEvent(init);
	
	//window.onload = init;
	
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
		var animationTime = 300;
		
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
			a.animate({top: 0}, animationTime);
			a2.animate({top: 0}, animationTime);
			a.addCssClass(cssHoverClass);
			a2.addCssClass(cssHoverClass);
		};
		
		function itemMouseLeave(e) {
			a.animate({top: originalTop}, animationTime);
			a2.animate({top: originalTop}, animationTime);
			a.removeCssClass(cssHoverClass);
			a2.removeCssClass(cssHoverClass);
		};
	};	
	
});