var Site = Site || {};
Site.LightBox = new (function(){
	$(document).ready(init);
	
	function init() {
		$('#comissions a').lightBox();
	};
});