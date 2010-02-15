$.namespace("SF");

SF.ReadMore = new (function(){
	$(document).ready(init);
	
	var hideClass = "hide";
	
	function init() {
		// find all panels
		var panels = $("div.readMorePanel");
		for(var i = 0; i < panels.length; i++) {
			new ReadMore(panels[i]);
		};
	};
	
	function ReadMore(panel) {
		var activator = $(panel).find("a.readMoreAnchor")[0] || null;
		var zone = $(panel).find(".readMoreZone")[0] || null;
		
		if(!activator || !zone) return null;
		
		$(zone).addClass(hideClass);
		
		$(activator).bind("click", expandZone);
		
		function expandZone(e) {
			$(activator).remove();
			$(zone).removeClass(hideClass);
			return false;
		};		
	};
	
});


