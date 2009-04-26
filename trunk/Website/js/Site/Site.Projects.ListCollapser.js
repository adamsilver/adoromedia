$(document).ready(function(){ 
	new Adoro.ListCollapser($("div.mySpecialList a")[0], $("div.mySpecialList ul")[0], {
		limit: 3,
		startOpen: false
	});
	
	new Adoro.ListCollapser($("div.mySpecialList a")[1], $("div.mySpecialList ul")[1], {
		limit: 1,
		startOpen: false,
		showHTML: "<span>+</span> please show me more",
		hideHTML: "<span>-</span> please show me less"
	});
});