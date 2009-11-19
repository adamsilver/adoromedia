var Site = Site || {};
Site.Projects = Site.Projects || {};
Site.Projects.Home = new (function(){
	var listItems = [];
	
	addDOMReadyEvent(function(){
		var ul = document.getElementsByClassName({ cssClass: "projects", tags: "ul" })[0];
		var lis = ul.getElementsByTagName("li");
		var li = null;
		for(var i = 0; i < lis.length; i++) {
			//alert(i);
			li = new ListItem(lis[i]);
			listItems.push(li);
		};
	});
	
	function ListItem(item) {
		var me = this;
		item.addEvent("mouseenter", function(){
			fadeOutAllLis(me);
		});
		
		item.addEvent("mouseleave", function() {
			fadeInAllLis();
		});
		
		this.fadeOut = fadeOut;
		function fadeOut() {
			item.setStyle("opacity", 0.5);
		};
		this.fadeIn = fadeIn;
		function fadeIn() {
			item.setStyle("opacity", 1);
		};
	};
	
	function fadeOutAllLis(ignoreItem) {
		for(var i = 0; i<listItems.length; i++) {
			if(listItems[i] === ignoreItem) continue;
			listItems[i].fadeOut();
		}
	};
	
	function fadeInAllLis() {
		for(var i = 0; i<listItems.length; i++) {
			listItems[i].fadeIn();
		}
	};
});