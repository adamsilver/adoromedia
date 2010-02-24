var App = App || {};
App.Nav = new (function() {
	$(init);
	function init() {
		var container = document.getElementById("map")
		if(!container) return;
		new Adoro.GoogleMap(container, "St Andrews House 26 Brighton Rd, Crawley, West Sussex, RH10 6AA");
	}
});