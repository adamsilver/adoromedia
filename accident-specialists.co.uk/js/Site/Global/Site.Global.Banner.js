var Site = Site || {};
Site.Global = Site.Global || {};

Site.Global.Banner = new (function() {
	$(document).ready(init);
	
	function init() {
		$("#bannerInner").cycle('fade');
	};
});