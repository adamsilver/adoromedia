$.namespace("SF.Department");
/**
 * Creates the department movie usng swf object
 * @constructor
 * @static
 * @name SF.Department.FlashMovie
 */
SF.Department.FlashMovie = new (function(){
	$(document).ready(init);
	
	function init() {
		var container = document.getElementById("departmentPanels");
		if(!container) return;
		if(!swfobject.hasFlashPlayerVersion("9")) return; 
		
		$("body").addClass("departmentEnhanced");
		
		var flashvars = {htmlSrc: encodeURIComponent("<div id='departmentPanels'>"+Adoro.DomHelper.getInnerXml(container)+"</div>")},
			params = {wmode:"opaque"},
			attributes = { id: "departmentFlash" },
			swfUrl = "/webapp/wcs/stores/ConsumerDirectStorefrontAssetStore/flash/Department.swf",
			replaceElemId = "departmentPanels",
			width = "960",
			height = "474",
			swfVersion = "10.0.0",
			swfExpressInstallUrl = "/webapp/wcs/stores/ConsumerDirectStorefrontAssetStore/flash/expressInstall.swf";
							
		swfobject.embedSWF(swfUrl, replaceElemId, width, height, swfVersion, swfExpressInstallUrl, flashvars, params, attributes);
	};


});