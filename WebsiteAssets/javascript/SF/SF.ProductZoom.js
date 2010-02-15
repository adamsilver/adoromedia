$.namespace("SF.ProductZoom");

SF.ProductZoom.Scene7Player = function() {
	
	var shopId = "SelfridgesRetailLimited",
		configName = "SelfridgesRetailLimited/SalmonZoom4",
		instanceId,
		productImage = null;
	
	(function init() {
		productImage = SF.ProductImage.get();
		var container = document.getElementById("scene7ProductZoom");
		if(!container) return;
		instanceId = genInstance();
		var viewerType = "genericzoom";
	        	
		// selfridges
		var imageName = getShopId() + "/" + getOriginalImageURL();  
			
		var flashvars = {}; 
		var params = {
			//Setup param tag elements for the flash object to embed in the page 
			allowScriptAccess:"Always",
			menu:"false",
			quality:"high",
			scale:"noscale",
			salign:"LT",
			bgcolor:"#FFFFFF",
			wmode:"opaque"
		};  
				
		var attributes = {  
			//Setup object tag elements for the flash object to embed in the page
			id: instanceId,
 			name: instanceId
		};
		var viewPortHeight = $(window).height() - 80; //80px to allow main nav to be visible
		var viewerUrl = "";  //Build Viewer Path to Viewer swf
 		viewerUrl += S7Config.isViewerRoot;
 		viewerUrl += "flash/" + viewerType + ".swf?";
 		viewerUrl += "serverUrl=" + S7Config.isRoot;
 		viewerUrl += "&contentRoot=" + S7Config.skinsRoot;
 		viewerUrl += "&instanceName=" + instanceId;
 		viewerUrl += "&image=" + imageName;
 		viewerUrl += "&config=" + configName;
		swfobject.embedSWF(viewerUrl, "scene7ProductZoom", "1024", viewPortHeight, "7.0.14.0", "/webapp/wcs/stores/ConsumerDirectStorefrontAssetStore/flash/expressInstall.swf", flashvars, params, attributes);
	})();
	
	function getOriginalImageURL() {
		return document.getElementById("largeImage").className;
	};
	
	function getShopId() {
		return shopId;
	};
	
	function setNewImage(newImageRef) {
		S7Config.setFlashParam(instanceId, 'image', getShopId()+"/"+newImageRef);
	};
	
	function update() {
		var imageRef = $(productImage).attr("class");
		setNewImage(imageRef);
	};
	
	$.subscribe(Salmon.UI.CustomEvents.productLargeImageChanged, update);
	
};

SF.ProductZoom.Controller = function() {

	var showOverlayLink = null,
		inPageContainer = null,
		movieContainer = null,
		closeLink = null
		zoom = null;
	
	(function init() {
		zoom = new SF.ProductZoom.Scene7Player;
		showOverlayLink = $("div#productImage div.details p.zoom a")[0] || null;
		inPageContainer = document.getElementById("productZoom");
		movieContainer = document.getElementById("productZoomOverlay");
		closeLink = $(movieContainer).find("div.closeOverlay a")[0] || null;
	
		if(!showOverlayLink || !inPageContainer || !movieContainer || !closeLink) return;
		
		$(inPageContainer).addClass("off");	
		$(inPageContainer).css("top", "-9999px");
		$(showOverlayLink).bind("click", showOverlayLink_onClick);
		$(closeLink).bind("click", closeLink_onClick);
	})();
	
	function showOverlayLink_onClick() {
		Adoro.Dialogue.setHTML(movieContainer);
		Adoro.Dialogue.showDialogue();
		
		//Allow 80px at the top for main nav to be visble
		$('#dialogue').height($('body').height() - 80);
		$('#dialogue').css("top", "80px");
		return false;
	};
	
	function closeLink_onClick() {
		inPageContainer.appendChild(movieContainer);
		Adoro.Dialogue.hideDialogue();
		return false;
	};
};
