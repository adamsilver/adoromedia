$.namespace("SF.FittingRoom");

SF.MiniFittingRoom = new (function(){
	var hideClass = "hide",
		li = null,
		panel = null,
		innerPanel = null,
		justAdded = null,
		hovering = false,
		showingTime = 6000,
		justAddedSelector = "div.justAdded",
		itemsCount;
		
	$(document).ready(init);
	
	function init() {
		li = $("#globalNavigation li.fittingRoom")[0] || null;
		itemsCount = $(li).find("span.icon")[0] || null;
		//giftListItemsCount = $("li.giftList a span.icon")[0] || null;
		panel = document.getElementById("miniFittingRoom");
		innerPanel = $(panel).find("div.miniFittingRoomInner")[0] || null;
		if(!li || !panel) return;
		justAdded = $(panel).find(justAddedSelector)[0] || null;
		if(!justAdded) return;
		hideJustAdded();
		$(li).bind("mouseenter", liMouseenter);
		$(li).bind("mouseleave", liMouseleave);
	}
	
	function liMouseenter() {
		setInsideLiState(true);
		showPanel(1);
	};
	
	function liMouseleave() {
		setInsideLiState(false);
		hideJustAdded();
		hidePanel();
	};
	
	function setInsideLiState(value) {
		hovering = value;
	};

	function showPanel(speed) {
		$(panel).css({"opacity":0});
		$(panel).removeClass(hideClass);
		$(panel).animate({"opacity":1}, speed);
	};
	
	function hidePanel() {
		$(panel).addClass(hideClass);
	};
		
	function setPanelHtml(html) {
		innerPanel.innerHTML = html;
	};
	
	function updateItemsCount(e) {
		var fr = e.data[0].fittingRoomItems;
		//var gr = e.data[0].giftRoomItems;
		itemsCount.innerHTML = fr;
		//giftListItemsCount.innerHTML = gr;
	};	
	
	function showAndHide(e) {
		var data = getData(e);		
		setPanelHtml(data.html);
		setJustAdded();
		showJustAdded();
		showPanel(500);
		window.scrollTo(0, $(li).position().top);
		window.setTimeout(function(){
			if(!hovering) {
				hideJustAdded();
				hidePanel();
			}
		}, showingTime);
		
		if ( data && data.script ) {
			eval( data.script );
		}
		
		$.publish(Salmon.UI.CustomEvents.miniFittingRoomChanged);
	};
	
	function getData(e) {
		var d = e || null;
		if(d) {
			d = e.data || null;
			if(d) {
				d = e.data[0] || null;
			}
		}
		return d;
	};
	
	function setJustAdded() {
		justAdded = $(panel).find(justAddedSelector)[0] || null;
	};
	
	function hideJustAdded() {
		$("div.justAdded").addClass(hideClass);
		$("#miniFittingRoom h2.defaultHeading").removeClass(hideClass);
	};
	
	function showJustAdded() {
		$("div.justAdded").removeClass(hideClass);
		$("#miniFittingRoom h2.defaultHeading").addClass(hideClass);
	};

	$.subscribe(Salmon.UI.CustomEvents.productAddedToFittingRoom, showAndHide);
	$.subscribe(Salmon.UI.CustomEvents.productAddedToFittingRoom, updateItemsCount);
});