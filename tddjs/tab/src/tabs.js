(function(){
	
	var dom = tddjs.dom;
	
	function create(element) {
		if(!element || typeof element.className != "string") {
			throw new TypeError("element is not an element");
		}
		dom.addClassName(element, "js-tab-controller");
		var tabs = Object.create(this);
		return tabs;
		
	}
	
	tddjs.namespace("ui").tabController = {
		create: create
	}

}())