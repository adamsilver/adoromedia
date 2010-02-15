$.namespace("SF");

/*
 * quick look object
 * @constructor
 * @static
 */
SF.QuickLook = new (function(){
	var panels = [];
		
	$.subscribe(Salmon.UI.CustomEvents.quickLookPanelsAdded, init);
	
	$(document).ready(init);
	
	// search for all quick look activators and create instances
	function init() {
		var containers = $("div.quicklook");
		
		var panel = null;
		for(var i = containers.length-1; i>=0; i--) {
			if(panelExists(containers[i])) continue;
			addPanel(containers[i]);
		};
	};
	
	this.addPanel = addPanel;
	function addPanel(node) {
		panel = new QuickLookPanel(node);
		panels.push(panel);
	};
	
	function panelExists(node) {
		var exists = false;
		for(var i = panels.length-1; i>=0; i--) {
			if(panels[i].container === node) {
				exists = true;
				break;
			}
		}
		return exists;
	};
	
	/*
	 * create quick look panels
	 * @class Represents a quick look panel
	 * @constructor
	 * @param {Node} container The root container DOM reference
	 */
	function QuickLookPanel(container) {
		var me = this;
		this.container = container;
		var anchor = $(container).find("a")[0] || null;
		if(!anchor) return null;
		
		var productDescriptionLoaded = false;
		
		var responseHTML = null;
		
		var panel = document.createElement("div");
		panel.id = "quickLookOverlay";
		
		var closeButton = document.createElement("a");
		closeButton.href="#";
		closeButton.className = "close";
		
		var img = new Image();
		img.src = Salmon.PageContext.STYLEIMAGEDIR + "/global/icon_close_overlay_l.gif";
		closeButton.appendChild(img);
		
		panel.appendChild(closeButton);
		
		var product = null;
		var moreLikeThis = null;
		var productForm = null;
		var colourSwatchSet = null;
		
		var hideClass = "hide";
		
		var button = document.createElement("a");
		button.href="#";
		button.className = "quickLookButton";		
		button.rel = anchor.rel;
		
		if($(anchor).parents(".colours").length == 0) {	
			//Create QuickLook button for thumbnail images		
			var img = new Image();
			img.src = Salmon.PageContext.STYLEIMAGEDIR+"/global/btn_sneek_a_peek.gif";
			button.appendChild(img);
			
			$(container).append(button);
			
		} else {
			//Create QuickLook function for colour swatches
			colourSwatchSet = new SF.ProductColourSwatchSet(container, true);
			$(container).bind("mouseover", function() {
				$(container).addClass("hover");
			});
			$(container).bind("mouseout", function() {
				$(container).removeClass("hover");
			});
			$(container).prepend(button);
		}
		
		hideButton();
		
		var loadingIndicator = new Salmon.UI.LoadingHtml(container);
				
		$(container).bind("mouseover", showButton);
		$(container).bind("mouseout", hideButton);
		$(button).bind("click", showQuickLookPanel);
		
		$(closeButton).bind("click", closeOverlay);
		
		function showButton() {
			$(button).removeClass(hideClass);
		};
		
		function hideButton() {
			$(button).addClass(hideClass);
		};
		
		function showQuickLookPanel() {
			if(productDescriptionLoaded) {
				showOverlay();
				return false;
			};
		
			var URL = "/webapp/wcs/stores/servlet/ProductDescriptionPanelAjaxView"; 
			var data = this.rel;
			loadingIndicator.show();
			$.ajax({
				url: URL,
				type: "get",
				data: data,
				dataType: "json",
				success: quickLookPanelLoaded,
				error: function() {
					Adoro.Dialogue.setHTML("There is an error");
				}
			});
			
			return false;
		};
		
		function quickLookPanelLoaded(response) {
			$(panel).append(response.html);
			
			product = new SF.ProductVariantsHandler($(panel).find("div.productInformation")[0]);
			
			var productId = $(panel).find("input[name='productId']").val() || null;
			
			showOverlay();
			
			moreLikeThis = new SF.ProductMoreLikeThis($(panel).find("div.moreLikeThis")[0]);
			
			productForm = new SF.ProductForm($(panel).find("form")[0], productId,  me);				
			
			var labels = $(panel).find("div.colorSwatch label");
			colourSwatchSet = new SF.ProductColourSwatchSet(labels);
					
			productDescriptionLoaded = true;
			$.publish(Salmon.UI.CustomEvents.quickLookDataReceived, response.data);
		};
		
		function showOverlay() {
			loadingIndicator.hide();
			Adoro.Dialogue.hideDialogue();
			Adoro.Dialogue.setHTML("");
			Adoro.Dialogue.setHTML(panel);
			Adoro.Dialogue.showDialogue({closeOnOverlayClick:false});
            SF.ImageRollovers.init();
            Cufon.replace("#quickLookOverlay p.sneekTitle, #quickLookOverlay .moreLikeThis h2");
            $("#overlay").bind("click", closeOverlay);
		};
		
		function closeOverlay() {
			Adoro.Dialogue.hideDialogue();
			panel.parentNode.removeChild(panel);
			Adoro.Dialogue.setHTML("");
			return false;
		};
		
		this.closeOverlay = closeOverlay;
		
	};
	
});