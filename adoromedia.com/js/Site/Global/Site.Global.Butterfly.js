var Site = Site || {};
Site.Global = Site.Global || {};
Site.Global.Butterfly = new (function() {
	addDOMReadyEvent(function(){
		var flash = document.getElementById("flash");
		if(!flash) return;
		swfobject.embedSWF("../../swf/butterfly.swf", "flash", "300", "120", "9.0.0", "../../swf/expressInstall.swf", {}, {wmode: "opaque"});
	});
});