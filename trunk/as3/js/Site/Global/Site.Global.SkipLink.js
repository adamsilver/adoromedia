var Site = Site || {};
Site.Global = Site.Global || {};

Site.Global.SkipLink = new (function() {
	$(document).ready(init);
	
	var a;
	function init() {
		var shortcuts = document.getElementById("shortcuts");
		if(!shortcuts) return;
		a = shortcuts.getElementsByTagName("a")[0] || null;
		if(!a) return;
		$(a).bind("click", scroll);
	};
	
	function scroll() {
		var div = document.getElementById("content");
		
		
		$.scrollTo( div, 600);
		return false;;
	};
});