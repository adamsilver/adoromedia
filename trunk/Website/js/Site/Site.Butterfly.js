if(typeof Site !== "object") var Site = {};
Site.Butterfly = new (function(){
	$(document).ready(function(){
		swfobject.embedSWF("../wp-content/themes/adoro/swf/butterfly.swf", "flash", "300", "120", "9.0.0", "../wp-content/themes/adoro/swf/expressInstall.swf", {}, {wmode: "opaque"});
	});
});