$.namespace("SF");

SF.MiniShoppingBag = new (function(){
	var hideClass = "hide",
		li = null,
		panel = null,
		innerPanel = null,
		hovering = false,
		hideDelay = 6000,
		itemsCount = null;
	
	$(document).ready(init);
	
	function init() {
		li = $("#globalNavigation li.shoppingBag")[0] || null;
		panel = document.getElementById("miniShoppingBag");
		$(panel).bgiframe();
		innerPanel = $(panel).find("div.miniShoppingBagInner")[0] || null;
		itemsCount = $(li).find("span.icon")[0] || null;
		if(!li || !panel) return;
		hideJustAdded();
		$(li).bind("mouseenter", liMouseenter);
		$(li).bind("mouseleave", liMouseleave);
	};
	
	function liMouseenter() {
		setInsideLiState(true);
		showPanel();
	};
	
	function liMouseleave() {
		setInsideLiState(false);
		hideJustAdded();
		hidePanel();
	};
	
	function setInsideLiState(value) {
		hovering = value;
	};

	function showPanel() {
		$(panel).removeClass(hideClass);
	};
	
	function hidePanel() {
		$(panel).addClass(hideClass);
	};
		
	function setPanelHtml(html) {
		innerPanel.innerHTML = html;
	};
	
	function updateItemsCount(e) {
		var data = e.data[0].items;
		itemsCount.innerHTML = data;
	};
	
	function showAndHide(e) {
		var data = (function(){
			var d = e || null;
			if(d) {
				d = e.data || null;
				if(d) {
					d = e.data[0] || null;
				}
			}
			return d;
		}());

		if ( data && data.script ) {
			eval( data.script );
		}	
		
		if(data) {
			setPanelHtml(data.html);
		};

		
		showJustAdded();
		showPanel();
		window.scrollTo(0, $(li).position().top);
		window.setTimeout(function(){
			if(!hovering) {
				hideJustAdded();
				hidePanel();
			}
		}, hideDelay);
		$.publish(Salmon.UI.CustomEvents.miniShoppingBagChanged);
	};
	
	function hideJustAdded() {
		$(panel).find("div.justAdded").addClass(hideClass);
		$("#miniShoppingBag h2").removeClass(hideClass);
	};
	
	function showJustAdded() {
		$(panel).find("div.justAdded").removeClass(hideClass);
		$("#miniShoppingBag h2").addClass(hideClass);
	};
	
	$.subscribe(Salmon.UI.CustomEvents.productAddedToShoppingBag, showAndHide);
	$.subscribe(Salmon.UI.CustomEvents.productAddedToShoppingBag, updateItemsCount);
});