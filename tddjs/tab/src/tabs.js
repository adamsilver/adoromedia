(function(){
	
	var dom = tddjs.dom;
	
	function create(element) {
		if(!element || typeof element.className != "string") {
			throw new TypeError("element is not an element");
		}
		dom.addClassName(element, "js-tab-controller");
		
		var tabs = Object.create(this);
		
		element.onclick = function(e) {
			var e = e || window.event || {};
			tabs.handleTabClick(e);
		}
		
		element = null;
		
		return tabs;
		
	}
	
	function handleTabClick(e) {
		var target = e.target || e.srcElement;
		
		while(target && target.nodeType != 1) {
			target = target.parentNode;
		}
		
		this.activateTab(target);
		
	}
	
	function activateTab() {
	
	}
	
	tddjs.namespace("ui").tabController = {
		create: create,
		handleTabClick: handleTabClick,
		activateTab: activateTab
	}

}())