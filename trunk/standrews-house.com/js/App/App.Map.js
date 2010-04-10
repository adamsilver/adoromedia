var App = App || {};
App.Nav = new (function() {
	$(init);
	function init() {
		var container = document.getElementById("map")
		if(!container) return;
		new Adoro.GoogleMap(container, "26 Brighton Road, Crawley, West Sussex, RH10 6AA");
	}
});