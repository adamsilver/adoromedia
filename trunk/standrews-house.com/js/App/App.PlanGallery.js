var App = App || {};
App.PlanGallery = new (function() {
	$(init);
	function init() {
		$('#planGallery a').lightBox();
	}
});