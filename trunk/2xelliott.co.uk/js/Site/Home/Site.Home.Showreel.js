var Site = Site || {};
Site.Home = Site.Home || {};
Site.Home.Showreel = new (function(){
	$(document).ready(init);
	
	var open = false, link, panel;
	
	function init() {
		link = $("#homeIntroduction p.showreel a")[0] || null;
		panel = document.getElementById("showreel");
		if(!link || !panel) return;
		
		$(panel).css("display", "none");
		$(link).bind("click", togglePanel);
	};
	
	function togglePanel() {
		if(open) {
			hide();
		}
		else {
			show();
		}
		return false;
	};
	
	function hide() {
		$(panel).slideUp();
		open = false;
	};
	
	function show() {
		$(panel).slideDown();
		open = true;
	};
	
});