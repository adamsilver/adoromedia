$(document).ready(function(){ 
	var myCollapse = new Adoro.Collapser($("div#collapseMe div.panel")[0], $("div#collapseMe a.activator")[0], {
		startOpen: true,
		nodesToAddHideClassTo: [document.getElementById("collapseMe")],
		activatorInactiveHTML: "Show demo",
		activatorActiveHTML: "Hide demo",
		animate: true
	});
});