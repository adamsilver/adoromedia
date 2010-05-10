var Adoro = Adoro || {};

/**
 * @class Apply a default value to a form element.
 * <br/><br/>
 * If the user focuses and the value in the field
 * is the default value then the form element will
 * become blank.
 * <br/><br/>
 * If the user blurs and the value in the field is
 * either empty or the default value then the form
 * element returns to the default value.
 * @constructor
 * @param {Node} field The input field
 * @requires jQuery
 * @example
 * new Adoro.DefaultTextControl(document.getElementById("myInput"));
 */
Adoro.DefaultTextControl = function(field) {
	var $field = $(field);
	
	$field.bind("focus", field_onFocus);
	$field.bind("blur", field_onBlur);
	
	function field_onFocus(e) {
		if(field.value === field.defaultValue) {
			field.value = "";
		}
	}
	
	function field_onBlur(e) {
		if(field.value === "" || field.value === field.defaultValue) {
			field.value = field.defaultValue;
		}
	}
}
