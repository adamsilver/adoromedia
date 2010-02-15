$.namespace("SF");

// we could loop through all panels and find the highest panel.
// then we can set the min height (height for ie6) for all the panels to be the same
// then set the clip to be double the height

SF.ProductBundle = new (function(){
	$(document).ready(init);
	
	function init() {
		preparePanels();
		prepareCarousel();
	};
	
	function preparePanels() {
		var panels = $("div.productInformation, div.bundleDetails");
		var moreLikeThis = null;
		for(var i = 0; i < panels.length; i++) {
			new SF.ProductVariantsHandler(panels[i], false);
			new SF.ProductTabbedOverlayHandler(panels[i]);
			moreLikeThis = $(panels[i]).find("div.moreLikeThis")[0] || null;
			if(moreLikeThis) {
				new SF.ProductMoreLikeThis(moreLikeThis);
			}
			
			var form = panels[i].getElementsByTagName("form")[0] || null;
			if(form && form.name != "SubmitSendContactForm") {
				new SF.ProductForm(form)
			}
			
			var labels = $(panels[i]).find("div.colorSwatch label");
			new SF.ProductColourSwatchSet(labels);
		};	
	};
	
	function prepareCarousel() {
		var root = document.getElementById("productBundleItems");
		if(!root) return;
		var largestPanelHeight = (function(){
			var h = 0;
			var liHeight = 0;
			var lis = $(root).find("li.slide");
			var panels = $(root).find("div.productInformation");
			for(var i = 0; i < panels.length; i++) {
				liHeight = $(panels[i]).outerHeight();
				if(h > liHeight) continue;
				h = liHeight;
			}
			return h;
		}());

		
		var cssProperty = ($.browser.msie && $.browser.version == 6) ? "height"  : "min-height";
		
		$(root).find("li.slide").css(cssProperty, largestPanelHeight+"px");
		$(root).find("div.clip").css("height", largestPanelHeight*2+"px");
		
		var backHTML = '<img src="'+Salmon.PageContext.STYLEIMAGEDIR+'/global/icon_arrow03_up.gif" alt="'+Salmon.StoreText.PREVIOUS+'" />';
		var forwardHTML = '<img src="'+Salmon.PageContext.STYLEIMAGEDIR+'/global/icon_arrow03_down.gif" alt="'+Salmon.StoreText.NEXT+'" />';
		
		var maxItems = 2;
		
		var node = $(root).find("li.slide")[1] || null;
		if(!node) return;
		$(node).css("border-bottom-width","0px");
		
		var carousel = new Adoro.Carousel(root, {
			scrollCount: 1,
			vertical: true,
			isCircular: true,
			forwardButton: true,
			forwardButtonAppendTo: (function(){
				var node = document.createElement("div");
				node.className="forwardContainer";
				$(root).append(node);
				return node;
			}()),
			backButton: true,
			backButtonAppendTo:(function(){
				var node = document.createElement("div");
				node.className="backContainer";
				$(root).prepend(node);
				return node;
			}()),
			indicators: false,
			stopButton: false,
			startButton: false,
			isCircular: false,
			backButtonHTML: backHTML,
			backButtonDisabledHTML: backHTML,
			forwardButtonHTML: forwardHTML,
			forwardButtonDisabledHTML: forwardHTML,
			onMoveForwards: function(params){
				if(params.currentSlideIndex === (params.lisLength) - (maxItems)) {
					//$(root).find("a.forward").addClass("forwardDisabled");
					return false;
				}
				return true;
			},
			onComplete: function(){
				var node = $(root).find("li.slide")[1] || null;
				if(!node) return;
				$(node).css("border-bottom-width","0px");
			},
			onStart: function() {
				$(root).find("li.slide").css("border-bottom-width", "1px");
			}
		});		
	};
});








