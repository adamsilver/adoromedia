var Adoro = Adoro || {};
Adoro.Carousel = function(containerNode, options){
	
	var containerNode = containerNode;
	var clipNode = $(containerNode).find("div.clip")[0] || null;
	var ulNode = $(clipNode).find("> ul")[0] || null;

	var options = options || {};
	var config = {};
	config.vertical = options.vertical || false;
	config.itemsToMoveBy = options.itemsToMoveBy || 3;
	config.onInit = options.onInit || null;
	config.onMove = options.onMove || null;
	config.onMoveBackwards = options.onMoveBackwards || null;
	config.onMoveForwards = options.onMoveForwards || null;
	config.onStart = options.onStart || null;
	config.onStop = options.onStop || null;
	config.onReachEnd = options.onReachEnd || null;
	config.onReachStart = options.onReachStart || null;
	
	function init() {
		//if(typeof config.onInit === "function") config.onInit.call(this);
		
		if(config.vertical) {
		}
		else {
		}
	}
	
	function start() {
	
	}
	function stop() {
	
	}
	function moveBy() {
	
	}
	function moveTo(index) {
	
	}

}
Adoro.Carousel.prototype = {

}

new Adoro.Carousel