$.namespace("SF.WhatsOn");

SF.WhatsOn.LandingPageNavigation = new (function(){

	$(init);
	
	function init() {
		if(document.getElementById("pgWhatsOnLanding")) {
			$("#secondaryNavigation a").unbind();
		}
	};

});

SF.WhatsOn.BlogsNavigation = new (function() {
	
	$(subMenuFactory);
	
	function subMenuFactory() {
		var navigation = document.getElementById("blogNavigation");
		if(!navigation) return;

		var sub = navigation.getElementsByTagName("ul");
		
		for (var i = 0; i < sub.length; i++ ) {
			var subMenu = new SubMenu(sub[i]);
		}
	}
	
	
	function SubMenu(list) {
		
		if(list.tagName.toLowerCase() !== "ul") return;
		
		var config = {
			limit: Salmon.PageContext.RHNAVVIEWLIMIT,
			hideText: "Hide", //Salmon.PageContext.CollapseNavigation;
			showText: "View all" //Salmon.PageContext.ExpandNavigation;
		}
		var node = createNode();
		var state = {open: false};
		var listItems = list.getElementsByTagName("li");
		
		insertViewAllNode();
		
		function insertViewAllNode() {
			if(listItems.length > config.limit) {
				list.appendChild(node);
				$(node).find("a").bind("click", clickEvent);
				toggle();
			}
		}
		
		function createNode() {
			var li = document.createElement("li");
			var a = document.createElement("a");
			var textNode = document.createTextNode(config.showText);
			a.setAttribute("href", "#");
			a.setAttribute("class", "viewAll");
			a.appendChild(textNode);
			li.appendChild(a);
			return li;
		}
		
		function clickEvent() {
			setState();
			toggle();
			return false;
		}
		
		function toggle() {
			for (var x = config.limit; x < listItems.length - 1; x++) {
				$(listItems[x]).slideToggle("fast");
			}
		}
		
		function setState() {
			//debugger;
			if(state.open === false) {
				node.getElementsByTagName("a")[0].innerHTML = config.hideText;
				state.open = true;
			} else {
				node.getElementsByTagName("a")[0].innerHTML = config.showText;
				state.open = false;
			}			
		}
	}
});