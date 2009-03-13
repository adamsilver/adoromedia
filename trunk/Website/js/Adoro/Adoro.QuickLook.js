if(typeof Adoro !== "object") var Adoro = {};

/**
* Convert a double delimited list such as the querystring into an object.  The delimiters can be defined as any set of two delimeters or they will default to & and = as per a querystring.
* @param {Array} delimeters An array of delimiters to split the string by
* @return {Object}
* @example
* "a=1&b=2".unDelimit()
* Returns the following object structure:
* {
*	a: 1,
*	b: 2
* }
* @example
* "a~1#b~2#b=3".unDelimit(["#", "~"])
* Returns the following object structure:
* {
*	a: 1,
*	b: [2, 3]
* }
*/
String.prototype.unDelimit = function(delimeters) {
	delimeters = delimeters || ["&", "="];
	if (delimeters.length === 1)
		return this.split(delimeters[0]);
	var items = this.split(delimeters[0]),
		o = {},
		i = 0,
		j = items.length,
		subItem;
	for (i; i<j; i++) {
		subItem = items[i].split(delimeters[1]);
		subItem[1] = subItem[1] || "";
		if (o[subItem[0]]) {
			if (isArray(o[subItem[0]])) {
				o[subItem[0]].push(subItem[1]);
			} else {
				o[subItem[0]] = [o[subItem[0]], subItem[1]];
			}
		} else {
			o[subItem[0]] = subItem[1];
		}
	}
	return o;
}

/**
* Check if an object is an Array
* @name isArray
* @function
* @param {Object} o The object to test
* @return {Boolean}
*/
window.isArray = function(o) {
	return Object.prototype.toString.call(o) === '[object Array]';
};
			

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
			var anchorQuerystring = anchor.href.split("?")[1] || null;
			if(anchorQuerystring === null) return;
			var productID = anchorQuerystring.unDelimit()["productID"];
			var sizeID = anchorQuerystring.unDelimit()["sizeID"];				
			var URL = ""; //may get this from page....probs a good idea
			Adoro.Dialogue.setHTML(loadingHTML);
			Adoro.Dialogue.showDialogue({showOverlay: false});
			var data = "productID="+productID+"&"+"size="+sizeID;
			//$.ajax({type: "POST",url: URL,data: data,complete: quickLookPanelLoaded});
			//window.setTimeout(quickLookPanelLoaded, 1000); // will be replaced by AJAX call.
			return false;
		}
		
		function quickLookPanelLoaded(data) {
			Adoro.Dialogue.hideDialogue({showOverlay: false});
			// this will be the data.html etc
			Adoro.Dialogue.setHTML('<div id="quickLookPanel">Quick look panel etc from server html</div>'); 
			addQuickLookEventHandlers();			
			
			// 1. get anchor coordinates
			// 2. get viewport height and width
			// 3. decide where to position the quick look - top, bottom, left or right
			// 4. add a class to tell the panel how to style itself
			// 5. position it.
			// 6. show it.
			
			Adoro.Dialogue.showDialogue({showOverlay: false});
		}
		
		function addQuickLookEventHandlers() {
			var quickLookPanel = $("div#quickLookPanel")[0] || null;
			var priceNode = $(quickLookPanel).find("p.price")[0] || null;
			var colourSelectorNode = $(quickLookPanel).find("div.colour")[0] || null;
			var sizeSelectorNode = $(quickLookPanel).find("div.size")[0] || null;
			var stockAvailabilityNode = $(quickLookPanel).find("div.size")[0] || null;
			var productID = $(quickLookPanel).find("input.productID")[0] || null;
			// var product = new SF.ProductDetails(id, {priceNode:priceNode, ) ;
		}
		
	}
	
});


