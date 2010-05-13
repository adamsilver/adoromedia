
var TestFormHints = new (function(){
	$(init);
	
	function init() {
		var $fields = $("form div.field");
		var $field = null;
		var $fieldEl= null;
		var $hint = null;
		for(var i = 0; i < $fields.length; i++) {
			$field = $($fields[i]);
			$fieldEl = $field.find("input, select, textarea") || null;
			$hint = $field.find("div.helpHint") || null;
			if(!$fieldEl.length || !$hint.length) continue;
			new FormHint($fieldEl, $hint);
			
		}
	}
	
	function FormHint($field, $hint) {
		
		$hint.hide();
		$field.bind("focus", field_onFocus);
		$field.bind("blur", field_onBlur);
		
		function field_onFocus(e) {
			$hint.show();
		}
		
		function field_onBlur(e) {
			$hint.hide();
		}
		
	}
	
	
	
});

