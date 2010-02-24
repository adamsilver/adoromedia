var App = App || {};
App.Nav = new (function() {
	$(init);
	function init() {
		var container = document.getElementById("map")
		if(!container) return;
		new Adoro.GoogleMap(container, "Hartsbourne Golf Club, Hartsbourne Avenue, Bushey Heath, WD23 1JW");
	}
});