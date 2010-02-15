$.namespace("SF.ProductSpin");

SF.ProductSpin.Scene7Player = function() {
	
	var shopId = "SelfridgesRetailLimited",
		configName = "Scene7SharedAssets/SpinSet-MM1",
		mainImage,
		instanceId;
	
	(function init() {
		var imageId = getImageId();
		if(imageId) s7SpinImageCheck(imageId);
		
		var link = $("div#productImage div.details p.spin");
		var container = document.getElementById("scene7ProductSpin");
		if(!container || !link) return;
		instanceId = genInstance();
		var viewerType = "genericspin";
	        	
		// selfridges
		var imageName = getShopId() + "/" + getFlashParamImageName(document.getElementById("largeImage").className);
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
		
		var viewerUrl = "";  //Build Viewer Path to Viewer swf
 		viewerUrl += S7Config.isViewerRoot;
 		viewerUrl += "flash/" + viewerType + ".swf?";
 		viewerUrl += "serverUrl=" + S7Config.isRoot;
 		viewerUrl += "&contentRoot=" + S7Config.skinsRoot;
 		viewerUrl += "&instanceName=" + instanceId;
 		viewerUrl += "&image=" + imageName;
 		viewerUrl += "&config=" + configName;
		swfobject.embedSWF(viewerUrl, "scene7ProductSpin", "960", "540", "7.0.14.0", "/webapp/wcs/stores/ConsumerDirectStorefrontAssetStore/flash/expressInstall.swf", flashvars, params, attributes);
	})();
	
	/* Public method can be called from Scene7 JS Check_exists.js */
	this.showSpin = showSpin;
	function showSpin() {
		$("div#productImage div.details p.spin a").removeClass("hidden"); 
	}
	
	function getImageSku (selector){
		var obj = null;
		obj = $(selector)[0] || null;
		if(obj) {
			obj = obj.className;
		}
		return obj;
	}
	
	function getImageId() {
		var suffix = "_36001";
		
		var swatch = getImageSku("div.productInformationInner label img");
		var mainImage = getImageSku("img#largeImage");
		var imageId;
		
		if(!swatch || ! mainImage) return;
		
		if(swatch) {
			return "SelfridgesRetailLimited/" + swatch + suffix;
		} else if(mainImage) {
			return mainImage + suffix;
		}
	};
	
	function getFlashParamImageName(imageId) {
		//Remove any instances of _M from main image id
		var imageSuffix = imageId.substring(imageId.length - 2, imageId.length);
		imageId = imageSuffix == "_M" ? imageId.substring(0, imageId.length - 2) : imageId;
		
		return imageId + "_360";
	}
	
	function getShopId() {
		return shopId;
	};
	
	function setNewImage(newImageRef) {
		var imageRef = getShopId() + "/" + newImageRef;
		S7Config.setFlashParam(instanceId, 'image', imageRef);	};
	
	function update(e) {
		var data = e.data[0] || null;
		setNewImage(data.imageReference);
	};
	
	$.subscribe(Salmon.UI.CustomEvents.productLargeImageChanged, update);
	
};

SF.ProductSpin.Controller = function() {

	var showOverlayLink = null,
		inPageContainer = null,
		movieContainer = null,
		closeLink = null
		overlay = null;
	
	(function init() {
		
		overlay = new SF.ProductSpin.Scene7Player;
		showOverlayLink = $("div#productImage div.details p.spin a")[0] || null;
		inPageContainer = document.getElementById("productSpin");
		movieContainer = document.getElementById("productSpinOverlay");
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
		return false;
	};
	
	function closeLink_onClick() {
		inPageContainer.appendChild(movieContainer);
		Adoro.Dialogue.hideDialogue();
		return false;
	};
			
};
