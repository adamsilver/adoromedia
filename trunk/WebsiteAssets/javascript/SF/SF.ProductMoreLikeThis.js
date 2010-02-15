$.namespace("SF");
SF.ProductMoreLikeThis = function(root) {
	var hideClass = "hide";
	$(root).addClass("moreLikeThisEnhanced");
	var a = document.createElement("a");
	a.href="#";
	a.className = "activator";
	
	var img = new Image();
	img.src = Salmon.PageContext.STYLEIMAGEDIR+"/icon_more_like_this2.gif";
	img.alt = "More like this";
	a.appendChild(img);
	$(root).prepend(a);

	var links = $(root).find("div.links")[0] || null;
	if(!links) return;
	$(links).bgiframe();
	$(links).addClass("hide");
	$(a).bind("mouseenter", showPanel);
	$(root).bind("mouseleave", hidePanel);
	function showPanel() {
		$(links).removeClass(hideClass);
	}
	
	function hidePanel() {
		$(links).addClass(hideClass);
	}
}