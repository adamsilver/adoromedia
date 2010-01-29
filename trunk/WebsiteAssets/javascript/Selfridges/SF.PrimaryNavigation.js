$.namespace("SF");
SF.PrimaryNavigation = new (function() {
	$(document).ready(function() {
		var root = $("#primaryNavigation ul")[0] || null;
		var menu = new Adoro.DropDownMenu(root, { cssHideClass: "off", subMenuType: "div", cssActiveClass: "hover" });
	});
});