$.namespace("SF.AuctionDetails");

SF.AuctionDetails = new (function(){
	$(document).ready(init);
	
	var root = null;
	
	function init() {
		root = $("div.productInformation")[0] || null;
		if(!root) return;
		initTabs();
	};
	
	function initTabs() {
		new SF.ProductTabbedOverlayHandler(root);
	};
	
});