if(typeof Adoro !== "object") var Adoro = {};
$(document).ready(function(){
	/**
	 * Scan document for all inputs, textareas and selects and add field highlighting functionality
	 * @constructor
	 * @static
	 */
	Adoro.FieldHighlight = new (function() {
		var config = {cssHightlight: "highlight"};
		var fields = $("input, textarea, select");
		for(var i = fields.length-1; i>=0; i--) {
			fields[i].onfocus = field_onFocus;
			fields[i].onblur = field_onBlur;
		}
		
		function field_onFocus() {
			$(this).parents("div.field").addClass(config.cssHightlight);
		}
		
		function field_onBlur() {
			$(this).parents("div.field").removeClass(config.cssHightlight);
		}
	});
});
