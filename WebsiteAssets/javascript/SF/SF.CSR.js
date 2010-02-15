$.namespace("SF.CSR");

SF.CSR.MyAccountNavigation = new (function(){
	$(document).ready(init);
	var panel = null;
	function init() {
		var li = $("#csrContentHeader .navigation li.myAccountMenu")[0] || null;
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
