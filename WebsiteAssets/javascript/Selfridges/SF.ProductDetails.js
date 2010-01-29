$.namespace("SF.ProductDetails");

SF.ProductDetails = new (function(){
	$(document).ready(init);
	
	var root = null, tabbedOverlay = null;
	
	function init() {
		root = $("div.productInformation")[0] || null;
		var productId = $(root).find("input[name='productId']").val() || null;
		if(!root) return;
		initTabs();
		initVariants();
		initMoreLikeThis();
		initProductForm(productId);
		initGalleryLink();
		initColourSwatchSet();
		initQuantityChanger();
	};
	
	function initTabs() {
		tabbedOverlay = new SF.ProductTabbedOverlayHandler(root);
	};
	
	function initVariants() {
		new SF.ProductVariantsHandler(root);
	};
	
	function initMoreLikeThis() {
		var node = $(root).find("div.moreLikeThis")[0] || null;
		if(!node) return;
		new SF.ProductMoreLikeThis(node);
	};
	
	function initProductForm(productId) {
		var form = $(root).find("form")[0] || null;
		if(!form) return;
		new SF.ProductForm(form, productId);
	};
	
	function initGalleryLink() {
		var a = $("#productImage p.gallery a.tabbedPanelActivator")[0] || null;
		$(a).bind("click", galleryClick);
	};
	
	function galleryClick() {
		var tabAnchor = tabbedOverlay.getAnchorToTrigger(this.hash);
		if(!tabAnchor) return;
		tabbedOverlay.showOverlay(tabAnchor);
		return false;
	};
	
	function initColourSwatchSet() {
		var labels = $(root).find("div.colorSwatch label");
		new SF.ProductColourSwatchSet(labels);
	};
	
	function initQuantityChanger() {
		var field = $(root).find("input[name='quantity']")[0] || null;
		
		var addButton = document.createElement("a");
		addButton.href="#";
		addButton.className = "increment";
		var addButtonImage = new Image();
		addButtonImage.src = Salmon.PageContext.STYLEIMAGEDIR+"/global/icon_plus.gif";
		addButton.appendChild(addButtonImage);
		
		$(field).parent().append(addButton);
		
		var minusButton = document.createElement("a");
		minusButton.href="#";
		minusButton.className = "decrement";
		var minusButtonImage = new Image();
		minusButtonImage.src = Salmon.PageContext.STYLEIMAGEDIR+"/global/icon_minus.gif";
		minusButton.appendChild(minusButtonImage);		
		
		$(field).parent().append(minusButton);

		new SF.QuantityChanger(field, {
			increaseButton: addButton, 
			decreaseButton: minusButton,
			range: {lowerLimit: 0, upperLimit: null}
		});
	};
	
	
	
});