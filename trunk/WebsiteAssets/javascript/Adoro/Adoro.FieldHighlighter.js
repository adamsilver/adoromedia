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
			new FieldHighlighter(fields[i]);
		}
				
		function FieldHighlighter(field) {
			$(field).bind("focus",field_onFocus);
			$(field).bind("blur",field_onBlur);
		}
		
		function field_onFocus(e) {
			$(this).addClass(config.cssHightlight);
		}
		
		function field_onBlur(e) {
			$(this).removeClass(config.cssHightlight);
		}		
		
		return FieldHighlighter;		
	});
});