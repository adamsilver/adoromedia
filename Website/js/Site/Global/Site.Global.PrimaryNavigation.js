var Site = Site || {};
Site.Global = Site.Global || {};
Site.Global.PrimaryNavigation = new (function() {
	addDOMReadyEvent(init);
	
	function init() {
		var nav = document.getElementById("primaryNavigation");
		if(!nav) return;
		nav.setStyle("overflow", "hidden");
		
		var navItems = nav.getElementsByTagName("li");
		for(var i = navItems.length-1; i>=0; i--) {
			new NavItem(navItems[i]);
		}
		
	};
	
	function NavItem(item) {
		var a = item.getElementsByTagName("a")[0];
		
		item.addEvent("mouseenter", itemMouseEnter);
		item.addEvent("mouseleave", itemMouseLeave);
		
		a.setStyle("position", "relative");
		item.setStyle("overflow", "hidden");
		item.setStyle("position", "relative");		
		
		var a2 = a.cloneNode(true);
		
		item.setStyle("height", a.offsetHeight+"px");
		item.insertBefore(a2, a);
		
		a2.setStyle("top", -a.offsetHeight+"px");
		a.setStyle("top", -a.offsetHeight+"px");
		
		var originalTop = -a.offsetHeight;
		
		function itemMouseEnter(e) {
			a.animate({top: 0}, 300 );
			a2.animate({top: 0}, 300);
			a.addCssClass("selected");
			a2.addCssClass("selected");
		}
		
		function itemMouseLeave(e) {
			a.animate({top: originalTop}, 300 );
			a2.animate({top: originalTop}, 300);
			a.removeCssClass("selected");
			a2.removeCssClass("selected");
		}
	}	
	
});