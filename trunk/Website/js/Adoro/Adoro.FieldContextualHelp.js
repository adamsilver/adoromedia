if(typeof Adoro !== "object") var Adoro = {};
Adoro.FieldContextualHelp = function(field, content, options) {
	if(field === null) return null;
	if(field === undefined) return null;
	if(content === null) return null;
	if(content === undefined) return null;
	
	document.body.appendChild(content);	
	
	var config = {
		width: $(field).outerWidth(),
		height: $(field).outerHeight(),
		contentWidth: $(content).outerWidth(),
		contentHeight: $(content).outerHeight(),
		positionX: $(field).position().left,
		positionY: $(field).position().top,
		offsetLeft: 0,
		offsetTop: 0,
		hideClass: "off",
		placement: "right" // can be "right", "left", "top", "bottom"
	}
	
	if(typeof options === "object") {
		config.offsetLeft = (typeof options.offsetLeft === "number") ? options.offsetLeft : config.offsetLeft;
		config.offsetTop = (typeof options.offsetTop === "number") ? options.offsetTop : config.offsetTop;	
		config.placement = (typeof options.placement === "string") ? options.placement : config.placement;	
	}
				
	$(field).bind("focus", show);
	$(field).bind("blur", hide);
	
	var position = {
		left: (function(){
			switch(config.placement) {
				case "bottom":
				case "top":
					return config.positionX + config.offsetLeft + "px";
					break;
				case "left":
					return config.positionX - config.contentWidth + config.offsetLeft + "px";
					break;
				case "right":
				default: 
					return config.positionX + config.width + config.offsetLeft + "px";
					break;
			}

		}()),
		top: (function(){
			switch(config.placement) {
				case "bottom":
					return config.positionY + config.height + config.offsetTop + "px"
					break;	
				case "top":
					return config.positionY - config.contentHeight + config.offsetTop + "px";
					break;
				case "right":
				case "left":
				default: 
					return config.positionY + config.offsetTop + "px";
			}

		}())
	}
	
	//$(content).css({"position": "absolute","left": position.left,"top": position.top});
	$(content).addClass(config.hideClass);
	
	function show() {
		$(content).css({"position": "absolute","left": position.left,"top": position.top});
		$(content).removeClass(config.hideClass);
	}
	
	function hide() {
		$(content).addClass(config.hideClass);
	}
}