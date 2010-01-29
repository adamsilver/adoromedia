$.namespace("SF");

SF.MyAccountNavigation = new (function(){
	$(document).ready(init);
	var panel = null;
	function init() {
		var li = $("#globalNavigation li.myAccount")[0] || null;
		panel = document.getElementById("myaccountnav");
		if(!li || !panel) return;
		$(li).bind("mouseenter", show);
		$(li).bind("mouseleave", hide);
	}

	function show() {
		$(panel).removeClass("hide");
	}
	function hide() {
		$(panel).addClass("hide");
	}

});
