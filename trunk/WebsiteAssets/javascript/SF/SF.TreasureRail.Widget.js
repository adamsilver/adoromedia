$.namespace("SF.TreasureRail");
SF.TreasureRail.Widget = new (function(){
	$(document).ready(init);
	
	function init() {
		if (SF.SizeSelector) SF.SizeSelector.init();		
		var widget = $("#treasureRailWidgetLoggedIn div.carousel")[0] || null;
		if(!widget) return;
		new Adoro.Carousel(widget, {scrollCount: 1, isCircular: false, stopButton: false, startButton: false});
		
	};
});