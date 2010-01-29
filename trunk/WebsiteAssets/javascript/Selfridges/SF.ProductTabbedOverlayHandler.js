$.namespace("SF.ProductTabbedOverlayHandler");

SF.ProductTabbedOverlayHandler = function(root) {
	var extraProductDetailsNode = $(root).find("div.extraProductDetails")[0] || null;
	var tabbedPanelNode = $(extraProductDetailsNode).find(".productTabbedOverlay")[0] || null;
	var tabbedPanelActivators = $(tabbedPanelNode).find(".navigation ul li a");
	var shareButton;
	
	if(!extraProductDetailsNode || !tabbedPanelNode || !tabbedPanelActivators) return;
	
	// Coremetrics binding to the click on the tabs (can't think of a better way to do it: NM).
	tabbedPanelActivators.bind( 'click', function() { executeSFCMScript(this) } );
	
	// setup tabs
	var img = new Image(); 
	img.src = Salmon.PageContext.STYLEIMAGEDIR + "/global/icon_close_overlay_l.gif";
	img.alt = "Close";
	$(tabbedPanelNode).find("div.navigation").prepend('<div class="close"><a href="#" title="Close"></a></div>');
	$(tabbedPanelNode).find("div.close a").prepend(img);
	var tabbedPanelCloseAnchor = $(tabbedPanelNode).find("div.navigation div.close a")[0] || null;
	$(tabbedPanelCloseAnchor).bind("click", hideOverlay);
	var tabs = new Adoro.Accordion(tabbedPanelActivators, { animate: false, alwaysOpen: true });	
	
	var triggers = $(root).find("a.tabbedPanelActivator");
	for(var i = triggers.length-1; i>=0; i--) {
		$(triggers[i]).bind("click", function(e){
			var anchor = getAnchorToTrigger(this.hash);
			showOverlay(anchor);
			return false;
		});
	}
	

	showOverlay(getAnchorToTrigger(location.hash));
	
	hideExtraProductDetailsNode();
	
	function hideExtraProductDetailsNode() {
		$(extraProductDetailsNode).css({"position": "absolute", "left": "-9999em"});
	};
	
	function getAnchorToTrigger(hash) {
		var anchor = null;
		for(var i = tabbedPanelActivators.length-1; i>=0; i--) {
			if(tabbedPanelActivators[i].hash === hash) {
				anchor = tabbedPanelActivators[i];
				break;
			}
		}
		return anchor;
	};
	
	function showOverlay(anchor) {
		if(!anchor) return;
		$(anchor).trigger("click");
		Adoro.Dialogue.setHTML("");
		Adoro.Dialogue.setHTML(tabbedPanelNode);
		Adoro.Dialogue.showDialogue();
		bindShareTabEvent();
        $("#overlay").bind("click", hideOverlay);
		return false;
	};
	
	function executeSFCMScript(anchor) { 
		var sfcmScript = $(anchor.hash + " .sfcmScript" ).html();
		if ( sfcmScript ) { eval( sfcmScript ) }; 
	};
	
	function hideOverlay() {
		extraProductDetailsNode.appendChild(tabbedPanelNode);
		Adoro.Dialogue.setHTML("");
		Adoro.Dialogue.hideDialogue();
		return false;
	};
	
	function bindShareTabEvent() {
		
		$("input[name='sendMessage'], input[name='addContact']").bind("click", function() {
			shareButton = $(this).attr("name");
		});
		
		var panel = $(".sharePanel");
		if(!panel) return;
		
		var form = $(panel).find("form").get(0);
		
		$(form).unbind("submit", form_onSubmit);
		$(form).bind("submit", form_onSubmit);
		
		function form_onSubmit() {
			var data = $(form).serialize();
			data += "&" + shareButton + "=";
	
			var actionContainer = $(this).find(".action").get(0);
			var overlayLoader = new Salmon.UI.LoadingHtml(actionContainer);
	        overlayLoader.show();
	        
			$.ajax({
				url: form.action,
				type: "post",
				data: data,
				dataType: "html",
				success: function(response) {
					$(panel).html(response);
					bindShareTabEvent();
				},
				error: Salmon.UI.AjaxError
			});
			return false;
		}
	}
	
	this.getAnchorToTrigger = getAnchorToTrigger;
	this.showOverlay = showOverlay;
	
}