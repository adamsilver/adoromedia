if(typeof Adoro !== "object") var Adoro = {};
Adoro.FieldContextualHelp = function(field, content, options) {
	if(field === null) return null;
	if(field === undefined) return null;
	if(content === null) return null;
	if(content === undefined) return null;
	
	var config = {
		width: $(field).outerWidth(),
		height: $(field).outerHeight(),
		positionX: $(field).position().left,
		positionY: $(field).position().top,
		offsetLeft: 10,
		offsetTop: 0,
		hideClass: "hide"
	}
				
	$(field).bind("focus", show);
	$(field).bind("blur", hide);
	
	document.body.appendChild(content);	
		
	$(content).css({
		"position": "absolute",
		"left": config.positionX + config.width + config.offsetLeft + "px",
		"top": config.positionY + config.offsetTop + "px"
	});
	$(content).addClass(config.hideClass);
	
	function show() {
		$(content).removeClass(config.hideClass);
	}
	
	function hide() {
		$(content).addClass(config.hideClass);
	}
}