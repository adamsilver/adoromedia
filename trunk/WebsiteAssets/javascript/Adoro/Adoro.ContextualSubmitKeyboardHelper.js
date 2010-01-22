var Adoro = Adoro || {};
Adoro.ContextualSubmitKeyboardHelper = function(fieldNode, submitButton) {
	var form = $(fieldNode).parents("form")[0] || null;
	var clone = $(submitButton).clone()[0] || null;
	$(clone).attr("id", "");
	$(clone).css({"position": "absolute", "left": "-9999em"});	
	if(!fieldNode || !submitButton || !form) return;
	
	$(fieldNode).bind("focus", fieldFocus);
	
	function fieldFocus() {
		$(form).prepend(clone);
	}
	
	function fieldBlur() {
		$(clone).remove();
	}	
}