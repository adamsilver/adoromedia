var Site = Site || {};
Site.Global = Site.Global || {};
Site.Global.Cufon = new (function(){
	$(document).ready(init);
	
	function init() {
		Cufon.replace('h1, h2, h3, p.readMore');
	};
	
});