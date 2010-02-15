$.namespace("SF.BrandRoom");
/**
 * Creates the brand room movie usng swf object
 * @constructor
 * @static
 * @name SF.BrandRoom.FlashMovie
 */
SF.BrandRoom.FlashMovie = new (function(){
	$(document).ready(init);
	
	function init() {
		var container = document.getElementById("brandRoomPanels");
		if(!container) return;
		if(!swfobject.hasFlashPlayerVersion("9")) return; 
		
		$("body").addClass("brandRoomEnhanced");
		var flashCategoryId = document.getElementById("flashCategoryId").value;
		var flashvars = {xmlPath:"/webapp/wcs/stores/servlet/BrandRoomPropertyView?categoryId="+flashCategoryId},
			params = {wmode:"opaque"},
			attributes = { id: "brandRoomFlash" },
			swfUrl = "/webapp/wcs/stores/ConsumerDirectStorefrontAssetStore/flash/BrandRoom.swf",
			replaceElemId = "brandRoomPanels",
			width = "960",
			height = "530",
			swfVersion = "10.0.0",
			swfExpressInstallUrl = "/webapp/wcs/stores/ConsumerDirectStorefrontAssetStore/flash/expressInstall.swf";
							
		swfobject.embedSWF(swfUrl, replaceElemId, width, height, swfVersion, swfExpressInstallUrl, flashvars, params, attributes);
	};


});