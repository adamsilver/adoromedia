$.scope = function(s, f) {
	return function scope() {
		f.apply(s, arguments);
	}
}

MaxLengthIndicator = function(field, indicator, options) {
	this.field = field;
	this.indicator = indicator;
	this.options = options || {};
	this.options.maxLength = this.options.maxLength || 50;
	this.field.bind("change", $.scope(this, this.field_onChange));
	this.field.bind("keyup", $.scope(this, this.field_onKeyUp));
	this.field.bind("keypress", $.scope(this, this.field_onKeyUp));
	this.checkLength();
}
MaxLengthIndicator.prototype.field_onChange = function(e) {
	this.checkLength();
}
MaxLengthIndicator.prototype.field_onKeyUp = function(e) {
	this.checkLength();
}
MaxLengthIndicator.prototype.updateIndicator = function(remaining) {
	this.indicator.html(remaining);
}
MaxLengthIndicator.prototype.checkLength = function() {
	var value = this.field.val();
	var ml = this.options.maxLength;
	var length = value.length;
	if(length > ml) {
		this.field.val(value.substr(0, ml));
	}
	this.updateIndicator(Math.max(0,ml-length));
}