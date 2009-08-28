var Site = Site || {};
Site.ShowReel = new (function() {
	addDOMReadyEvent(init);
	
	var showreel = null;
	var clip = null;
	var ul = null;
	var backButton = null;
	var nextButton = null;
	
	function init() {
		showreel = document.getElementById("work").getElementsByClassName({ cssClass: "showreel", tags: "div" })[0] || null;
		clip = showreel.getElementsByClassName({ cssClass: "clip", tags: "div" })[0] || null;
		ul = clip.getElementsByClassName({cssClass: "pages", tags:"ul"})[0] || null;
		ul.setStyle("width", getTotalWidthOfListItems());
		// add next and back button
		backButton = document.createElement("a", {href:"#", innerHTML:"back", cssClass:"back"});
		nextButton = document.createElement("a", {href:"#", innerHTML:"next", cssClass:"next"});
		showreel.appendChild(nextButton);
	};
	
	function back_onClick() {
	};
	
	function next_onClick() {
	};
	
	function getPages() {
		return ul.getElementsByClassName({cssClass: "page", tags:"li"});
	};
	
	function getTotalWidthOfListItems() {
		var listItems = getPages();
		var width = 0;
		for(var i = 0; i < listItems.length; i++) {
			width += listItems[i].offsetWidth + parseInt(listItems[i].getStyle("marginLeft")) + parseInt(listItems[i].getStyle("marginRight"))
		};
		return width;			
	};
	
});
