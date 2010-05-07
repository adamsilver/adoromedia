if(typeof Adoro !== "object") var Adoro = {};

/*
 * @constructor Creates a contextual help hint
 * @class Represents a Field contextual help hint
 * @param {Node} field The field which shows the contextual help
 * @param {Node} content The contextual help node that pops up
 * @param {Object} options The options for the instance
 * @param {Number} options.offsetLeft The offset left for the contextual help node
 * @param {Number} options.offsetTop The offset top for the contextual help node
 * @param {String} options.hideClass The css class added to hide the contextual help when in "hidden" mode.
 * @param {Sring} options.placement The placement of the contextual help relative to the field. can be "right", "left", "top" or "bottom".
 */
Adoro.FieldContextualHelp = function(field, content, options) {
	field = field || null;
	content = content || null;
	if(!field || !content) return null;
	
	document.body.appendChild(content);	
	var placementTypes = ["right", "left", "top", "bottom"];
	var config = {
		offsetLeft: 0,
		offsetTop: 0,
		hideClass: "off",
		placement: placementTypes[0]
	}
	
	if(typeof options === "object") {
		config.offsetLeft = (typeof options.offsetLeft === "number") ? options.offsetLeft : config.offsetLeft;
		config.offsetTop = (typeof options.offsetTop === "number") ? options.offsetTop : config.offsetTop;
		config.hideClass = (typeof options.hideClass === "string") ? options.hideClass : config.hideClass;
		config.placement = (function(){
			var p = config.placement;
			for(var i = placementTypes.length-1; i>=0; i--) {
				if(placementTypes[i] === options.placement) {
					p = options.placement;
					break;
				}
			}
			return p;
		}());
	}
				
	$(field).bind("focus", show);
	$(field).bind("blur", hide);
	
	$(content).addClass(config.hideClass);
	$(content).bgiframe();
	
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