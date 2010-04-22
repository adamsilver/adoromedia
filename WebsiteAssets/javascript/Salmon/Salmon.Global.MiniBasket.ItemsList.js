var Salmon = Salmon || {};
Salmon.Global = Salmon.Global || {};
Salmon.Global.MiniBasket = Salmon.Global.MiniBasket || {};

Salmon.Global.MiniBasket.ItemsList = new (function() {
	
	var $root,
		$miniShoppingBagRoot,
		cssHideClass = "hide";
	
	function init() {
		$miniShoppingBagRoot = $("#miniShoppingBag");
		if($miniShoppingBagRoot.length === 0) return;
		$root = $miniShoppingBagRoot.find("div.itemsList");
		if($root.length === 0) return;
		
		$miniShoppingBagRoot.bind("mouseenter", bag_mouseEnter);
		$miniShoppingBagRoot.bind("mouseleave", bag_mouseLeave);	
	}
	
	function bag_mouseEnter() {
		show();		
	}
	function bag_mouseLeave() {
		hide();		
	}	
	
	function show() {
		$root.removeClass(cssHideClass);
	}
	
	function hide() {
		$root.addClass(cssHideClass);
	}	
	
	function updateHtml(html) {
		if(typeof html !== "string") return;
		$root.empty().append(html);
	}
	
	$(init);
	
	this.updateHtml = updateHtml;
});