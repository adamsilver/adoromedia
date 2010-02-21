var App = App || {};
App.Nav = new (function() {
	$(init);
	function init() {
		var navUl = $("#nav ul")[0] || null;
		if(!navUl) return;
		new Adoro.DropDownMenu(navUl, {subMenuType: "div"});
	}
});