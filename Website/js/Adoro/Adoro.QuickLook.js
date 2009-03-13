if(typeof Adoro !== "object") var Adoro = {};

// need to do a SF.LoadingHTML property so we use the same loading sign.
var loadingHTML = '<div id="loading">Loading...</div>';

Adoro.QuickLook = new (function(){
	var panels = [];
	var anchorClass = "quicklook";
	$(document).ready(function(){
		var anchors = $("a."+anchorClass);
		var panel = null;
		for(var i = anchors.length-1; i>=0; i--) {
			panel = new QuickLookPanel(anchors[i]);
			panels.push(panel);
		}
	});
	
	function QuickLookPanel(anchor) {
		var hideClass = "hide";
		var quickLookButton = document.createElement("a");
		quickLookButton.href="#";
		quickLookButton.className = "quickLookButton";		
		quickLookButton.innerHTML = "Quick look";
		$(anchor).append(quickLookButton);
		hideQuickLookButton();
		$(anchor).bind("mouseover", showQuickLookButton);
		$(anchor).bind("mouseout", hideQuickLookButton);
		$(quickLookButton).bind("click", showQuickLookPanel);
		function showQuickLookButton() {
			$(quickLookButton).removeClass(hideClass);
		}
		
		function hideQuickLookButton() {
			$(quickLookButton).addClass(hideClass);
		}
		
		function showQuickLookPanel() {
			Adoro.Dialogue.setHTML(loadingHTML);
			Adoro.Dialogue.showDialogue({showOverlay: false});
			// before doing the request, i need to get some attribute about the product to send to ajax
			// i need to tell or get the server to give me a different quick look depending on the image size
			// there are two types of quick look etc.
			window.setTimeout(quickLookPanelLoaded, 1000); // will be replaced by AJAX call.
			return false;
		}
		
		function quickLookPanelLoaded(data) {
			Adoro.Dialogue.hideDialogue({showOverlay: false});
			Adoro.Dialogue.setHTML("<div>data.html</div>");
			
			// 1. get anchor coordinates
			// 2. get viewport height and width
			// 3. decide where to position the quick look - top, bottom, left or right
			// 4. add a class to tell the panel how to style itself
			// 5. position it.
			// 6. show it.
			
			Adoro.Dialogue.showDialogue({showOverlay: false});
		}
		
	}
	
});


