$.namespace("SF");

SF.ProductColourSwatchSet = function(nodes, isGalleryItem) {

	if(!nodes || nodes.length === 0) return;
	
	if(arguments.length == 2) {
		new Swatch(nodes);
	} else if (arguments.length == 1 || isGalleryItem === false) {
		for(var i = 0; i < nodes.length; i++) {
			new Swatch(nodes[i]);
		}
	}
	
	function Swatch(node) {
		// add swatch border
		var overlay = document.createElement("div");
		$(overlay).addClass("swatchOverlay");		
		node.appendChild(overlay);
		
		// add tooltip
		var tooltip = document.createElement("div");
		$(tooltip).addClass("swatchTooltip");

		if(node.nodeName.toLowerCase() == "label") {
			tooltip.innerHTML = '<div class="inner">'+$(node).find("img").attr("alt")+'</div>';
		} else if(node.nodeName.toLowerCase() == "div") {
			var image = node.getElementsByTagName("img")[0];
			tooltip.innerHTML = '<div class="inner">'+ image.alt +'</div>';		
		}
		node.appendChild(tooltip);
	};	
};