//new Adoro.ContextualSubmitKeyboardHelper(fieldNode, button);

var Adoro = Adoro || {};
Adoro.ContextualSubmitKeyboardHelper = function(fieldNode, submitButton) {
	var form = $(fieldNode).parents("form")[0] || null;
	var clone = $(submitButton).clone()[0] || null;
	if(!fieldNode || !submitButton || form) return null;
	
	$(fieldNode).bind("focus", fieldFocus);
	
	function fieldFocus() {
		$(form).prepend(clone);
	}
	
	function fieldBlur() {
		$(clone).remove();
	}	
}