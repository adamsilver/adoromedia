var Site = Site || {};
Site.Global = Site.Global || {};

Site.Global.Rollovers = new (function() {
	$(document).ready(init);
	
	var suffix = "_on";
	
	
	this.init = init;
	function init() {
		var rollovers = $("img.rollover, input.rollover[type='image']");
		addRollovers(rollovers);
	};

	this.add = add;
	function add(containerID) {
		var container = document.getElementById(containerID);
		if (!container) return;
		var rollovers = $(container).find("img.rollover, input.rollover[type='image']");
		addRollovers(rollovers);
	};

	function addRollovers(rollovers) {
		var rolloverInstance;
		for(var i = 0; i<rollovers.length;i++) {
			rolloverInstance = new Adoro.Rollover(rollovers[i],getSrc(rollovers[i].src));
		};
	};

	function getSrc(imageSrc) {
		var extensionIndex = imageSrc.lastIndexOf(".");
		var originalSourceWithoutExtension = imageSrc.substring(0,extensionIndex);
		var extension = imageSrc.substring(extensionIndex, imageSrc.length);
		return originalSourceWithoutExtension + suffix + extension;
	};
	
});