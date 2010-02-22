var App = App || {};
App.HomePageCycler = new (function() {
	$(init);
	function init() {
		var banner = document.getElementById("banner");
		if(!banner) return;
		$("#banner").cycle('fade');
	};
});
