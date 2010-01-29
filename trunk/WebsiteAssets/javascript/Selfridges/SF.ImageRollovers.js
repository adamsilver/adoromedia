$.namespace("SF");
/**
 * SF.ImageRollovers handles the creation of the image rollovers to selfridges image naming conventions
 * @constructor
 * @static
 * @name SF.ImageRollovers
 */
SF.ImageRollovers = new (function(){

	$(document).ready(init);
	
	var suffix = "_on";
	
	
	this.init = init;
	function init() {
		var rollovers = $("img.rollover, input.rollover[type='image']");
		addRollovers(rollovers);
	};

	this.add = add;
	function add(container) {
		var container = document.getElementById(container) || container;
		if (!container) return;
		var rollovers = $(container).find("img.rollover, input.rollover[type='image']");
		if(rollovers.length === 0) return;
		addRollovers(rollovers);
	};

	function addRollovers(rollovers) {
		var rolloverInstance;
		for(var i = 0; i<rollovers.length;i++) {
			rolloverInstance = new Salmon.ImageRollover(rollovers[i],getSrc(rollovers[i].src));
		};
	};

	function getSrc(imageSrc) {
		var extensionIndex = imageSrc.lastIndexOf(".");
		var originalSourceWithoutExtension = imageSrc.substring(0,extensionIndex);
		var extension = imageSrc.substring(extensionIndex, imageSrc.length);
		return originalSourceWithoutExtension + suffix + extension;
	};

});
