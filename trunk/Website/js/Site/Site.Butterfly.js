var Site = Site || {};
Site.Butterfly = new (function() {
	addDOMReadyEvent(function(){
		swfobject.embedSWF("../wp-content/themes/adoro/swf/butterfly.swf", "flash", "300", "120", "9.0.0", "swf/expressInstall.swf", {}, {wmode: "opaque"});
	});
});