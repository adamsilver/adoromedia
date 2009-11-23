var Adoro = Adoro || {}
$(document).ready(function(){
	/**
	 * Scan document for all inputs, textareas and selects and add field highlighting functionality
	 * @constructor
	 * @static
	 */
	Adoro.FieldHighlighter = new (function() {
		var config = {cssHightlight: "highlight"};
		var fields = $("input, textarea, select");
		for(var i = fields.length-1; i>=0; i--) {
			new FieldHighligher(fields[i]);
		}
				
		function FieldHighligher(field) {
			fields.onfocus = field_onFocus;
			fields.onblur = field_onBlur;
		}
		
		function field_onFocus(e) {
			$(this).parents("div.field").addClass(config.cssHightlight);
		}
		
		function field_onBlur(e) {
			$(this).parents("div.field").removeClass(config.cssHightlight);
		}		
		
		return FieldHighligher;		
	});
});
