$.scope = function(s, f) {
	return function scope() {
		f.apply(s, arguments);
	}
}

Panel = new (function() {
	function panel() {
		this.panel = $("#panel");
		this.button = $("#button");
		this.panel.hide();
		this.button.bind("click", $.scope(this, this.button_onClick));
	}
	panel.prototype.button_onClick = function(e) {
		this.panel.show();
		this.panel.css("backgroundColor", "red");
		document.title = "new title";
	}
	return new panel;
});