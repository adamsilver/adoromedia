if(typeof Adoro !== "object") var Adoro = {};
Adoro.FieldContextualHelp = function(field, content, options) {
	var field = field || null;
	var content = content || null;
	if(!field || !content) return null;
	
	document.body.appendChild(content);	
	
	var config = {
		offsetLeft: 0,
		offsetTop: 0,
		hideClass: "off",
		placement: "right" // can be "right", "left", "top", "bottom"
	}
	
	if(typeof options === "object") {
		config.offsetLeft = (typeof options.offsetLeft === "number") ? options.offsetLeft : config.offsetLeft;
		config.offsetTop = (typeof options.offsetTop === "number") ? options.offsetTop : config.offsetTop;
		config.hideClass = (typeof options.hideClass === "string") ? options.hideClass : config.hideClass;
		config.placement = (typeof options.placement === "string") ? options.placement : config.placement;
	}
				
	$(field).bind("focus", show);
	$(field).bind("blur", hide);
	
	$(content).addClass(config.hideClass);
	
	function show() {
		var pos = getPosition();
		$(content).css({"position": "absolute","left": pos.left,"top": pos.top});
		$(content).removeClass(config.hideClass);
	}
	
	function hide() {
		$(content).addClass(config.hideClass);
	}
	
	function getPosition() {
		return position = {
			left: (function(){
				switch(config.placement) {
					case "bottom":
					case "top":
						return $(field).position().left + config.offsetLeft + "px";
						break;
					case "left":
						return $(field).position().left - $(content).outerWidth() + config.offsetLeft + "px";
						break;
					case "right":
					default: 
						return $(field).position().left + $(field).outerWidth() + config.offsetLeft + "px";
						break;
				}
			}()),
			top: (function(){
				switch(config.placement) {
					case "bottom":
						return $(field).position().top + $(field).outerHeight() + config.offsetTop + "px"
						break;	
					case "top":
						return $(field).position().top - $(content).outerHeight() + config.offsetTop + "px";
						break;
					case "right":
					case "left":
					default: 
						return $(field).position().top + config.offsetTop + "px";
				}
			}())
		}
	}
}