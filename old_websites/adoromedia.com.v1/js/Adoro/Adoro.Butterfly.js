if(typeof Adoro !== "object") var Adoro = {};
Adoro.Butterfly = new (function(){
	$(document).ready(function(){
		swfobject.embedSWF("../../swf/butterfly.swf", "flash", "300", "120", "9.0.0", "../../swf/expressInstall.swf", {}, {wmode: "opaque"});
	});
});
