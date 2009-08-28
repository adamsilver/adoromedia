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
		backButton.addEvent("click",back_onClick);
		nextButton.addEvent("click",next_onClick);
		showreel.appendChild(backButton);
		showreel.appendChild(nextButton);
	};
	
	function back_onClick() {
		ul.animate({
			"left": {
				to: parseInt(ul.getStyle("left"))+380,
				time: 400,
				transition: J2.Transitions.Exp.easeOut
			}
		})
		return false;
	};
	
	function next_onClick() {
		ul.animate({
			"left": {
				to: parseInt(ul.getStyle("left"))-380,
				time: 400,
				transition: J2.Transitions.Exp.easeOut
			}
		})
		return false;
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
