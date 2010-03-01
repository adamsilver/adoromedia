var App = App || {};
/**
* More information form validator
* @class Represents a form validator object
* @constructor
* @static
* @name App.MoreInformationFormValidator
*/
App.MoreInformationFormValidator = new (function() {
	$(init);
	var form = null, fv = null, formHasAnError = false;
	
	/**
	* initialise the form validator
	* @function
	* @private
	*/
	function init() {
		form = document.getElementById("contactForm");
		if(!form) return;
		fv = new Adoro.FormValidator(form, {
			invalidRulesToShowPerValidator:1			
		});
		fv.addValidator("contactName", [{
			method: Adoro.FormRules.notEmpty,
			message: "Contact name is required"
		}]);
		fv.addValidator("contactEmail", [{
			method: Adoro.FormRules.notEmpty,
			message: "Contact email address is required"
		},{
			method: Adoro.FormRules.emailAddress,
			message: "Contact email address should be in the format of an email"
		}]);
		fv.addValidator("contactPhoneNumber", [{
			method: Adoro.FormRules.number,
			message: "Contact phone number should only contain digits"
		}]);
		
		// add custom events for when the form validator starts validating
		fv.addEventHandler("onFormValidateStart", clearErrorsInLabel);
		fv.addEventHandler("onFormValidateStart", clearFirstErrorInline);
		
		// add custom events to each field to show inline errors
		fv.addEventHandler("contactName.onFieldFail", showFirstErrorInline);
		fv.addEventHandler("contactEmail.onFieldFail", showFirstErrorInline);
		fv.addEventHandler("contactPhoneNumber.onFieldFail", showFirstErrorInline);
		
		// add custom events to indicate an error in label (useful for screen readers)
		fv.addEventHandler("contactName.onFieldFail", showErrorTextInLabel);
		fv.addEventHandler("contactEmail.onFieldFail", showErrorTextInLabel);
		fv.addEventHandler("contactPhoneNumber.onFieldFail", showErrorTextInLabel);
		$(form).bind("submit", form_onSubmit);
	}
	
	/**
	* When form submits check if form is valid
	* @function
	* @private
	* @param {object} e The event object
	* @return {boolean} True when all valid otherwise false
	*/
	function form_onSubmit(e) {
		return fv.validate();
	}
	
	/**
	* add error span to each label for the field that has an error
	* @function
	* @private
	* @param {boolean} e The event object
	* @param {object} $field Stores the jQuery object representing the field
	* @param {array[object]} rules The array of invalid rules for that field
	*/	
	function showErrorTextInLabel(e, $field, rules) {	
		$field.parents("div.field").find("label").append("<span class='error'> Error</span>");		
	}
	
	/**
	* add inline error paragraph to show visiual information
	* @function
	* @private
	* @param {boolean} e The event object
	* @param {object} $field Stores the jQuery object representing the field
	* @param {array[object]} rules The array of invalid rules for that field
	*/		
	function showFirstErrorInline(e, $field, rules) {		
		for(var i = 0; i < 1; i++) {	
			$field.parents("div.field").append("<p class='errorInline'>"+rules[i].message+"</p>");
		}		
	}
	
	/**
	* remove the error span from each label in the form
	* @function
	* @private
	*/		
	function clearErrorsInLabel() {
		$(form).find("div.field label span.error").remove();
	}
	
	/**
	* remove the inline error paragraph from each field in the form
	* @function
	* @private
	*/				
	function clearFirstErrorInline() {
		$(form).find("div.field p.errorInline").remove();
	}	
	
});

