if(typeof Site !== "object") var Site = {};
Site.SubPages = new (function(){
	$(document).ready(function(){ 
		var myCollapse = new Adoro.Collapser($("div.subpages ul")[0], $("div.subpages h2")[0], {
			startOpen: false,
			activatorInactiveHTML: "In this section",
			activatorActiveHTML: "In this section",
			animate: true
		});
	});
});