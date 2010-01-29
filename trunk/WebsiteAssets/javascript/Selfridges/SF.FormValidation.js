/**
 * @author ajeffery
 *
 * Validation Module
 * used to validate form fields
 * 
 * Requires:
 * jQuery 1.3
 * Adoro.FormRules.js
 * Adoro.FormValidator.js
 */
$.namespace("SF");
SF.FormValidation = (function(){
	
	var NOT_EMPTY = "notEmpty";
	var NOT_EMPTY_WHEN_OPTION = "notEmptyWhenOption";
	var PAYMENT_NOT_EMPTY = "payment.notEmpty";
	var PAYMENT_NOT_EMPTY_WHEN_OPTION = "payment.notEmptyWhenOption";
	var VALID_EMAIL = "validEmail";
	var VALID_NAME = "validName";
	var VALID_PHONE = "validPhoneNumber";
	var VALID_PASSWORD = "validPassword";
	var VALID_UK_POSTCODE = "validUkPostcode";
	var NUMERIC = "numeric;"
	var OPTION_SELECTED = "optionSelected";
	var OPTION_SELECTED_WHEN_OPTION = "isSelectedWhenOption";
	var PAYMENT_OPTION_SELECTED = "payment.optionSelected";
	var PAYMENT_IS_SELECTED_WHEN_OPTION = "payment.isSelectedWhenOption";
	var CV2PAYMENT_IS_SELECTED_WHEN_OPTION = "payment.cv2NotEmptyWhenOption";
	var IS_CHECKED = "isChecked";
	
	// TODO: use pagecontext
	var init = function() {
		Salmon.Comms.textLoader("FetchStoreText?langId=-1&keys=ERROR_", function(data){
			setValidationRules(data);
		});
	};

	// onDomReady events
	$(function() {
		init();
	});

	// Takes a rule message pair and returns a rule object containing the
	// method to use for validation, any parameters for the method, and
	// a message to be displayed if the rule isn't met.
	var getRuleObject = function(rulePair){
		var ruleObject = {};

		// Splits the rule message pair into Rule (index 0) and Error Message (index 1)
		var ruleData = rulePair.split(":");

		var ruleType = ruleData[0];
		var ruleMessage = ruleData[1];

		ruleObject.message = ruleMessage;

		// Checks for any parameters in the Rule
		// Returns an array:
		// [0] = The whole rule including parameters
		// [1] = The rule name
		// [2] = The value (if any) between the parenthesis
		var exp = new RegExp("([^\(]*)[\(]?([^\)]*)[\)]?");
		var rule = ruleType.match(exp);

		// Used to pair up the rule type with those in Adoro.FormRules or any
		// other validation functions.
		// Add any new validation mappings here.
		switch (rule[1]) {
			case NOT_EMPTY:
				ruleObject.method = Adoro.FormRules.notEmpty;
				break;
			case NOT_EMPTY_WHEN_OPTION:
				ruleObject.method = SF.FormValidation.Rules.notEmptyWhenOption;
				ruleObject.params = {optionFieldId : rule[2]};
				break;
			case PAYMENT_NOT_EMPTY:
				ruleObject.method = SF.FormValidation.Rules.payment.notEmpty;
				break;
			case PAYMENT_NOT_EMPTY_WHEN_OPTION:
				ruleObject.method = SF.FormValidation.Rules.payment.notEmptyWhenOption;
				ruleObject.params = {optionFieldId : rule[2]};
				break;
			case VALID_EMAIL:
				ruleObject.method = Adoro.FormRules.emailAddress;
				break;
			case VALID_NAME:
				ruleObject.method = Adoro.FormRules.nameCharacters;
				break;
			case VALID_PHONE:
				ruleObject.method = Adoro.FormRules.phoneNumber;
				break;
			case VALID_PASSWORD:
				ruleObject.method = Adoro.FormRules.password;
				break;
			case NUMERIC:
				ruleObject.method = Adoro.FormRules.number;
				break;
			case VALID_UK_POSTCODE:
				ruleObject.method = SF.FormValidation.Rules.isUkPostCode;
				break;
			case OPTION_SELECTED:
				ruleObject.method = SF.FormValidation.Rules.isSelected;
				break;
			case OPTION_SELECTED_WHEN_OPTION:
				ruleObject.method = SF.FormValidation.Rules.isSelectedWhenOption;
				ruleObject.params = {optionFieldId : rule[2]};
				break;
			case PAYMENT_OPTION_SELECTED:
				ruleObject.method = SF.FormValidation.Rules.payment.isSelected;
				break;
			case PAYMENT_IS_SELECTED_WHEN_OPTION:
				ruleObject.method = SF.FormValidation.Rules.payment.isSelectedWhenOption;
				ruleObject.params = {optionFieldId : rule[2]};
				break;
			case IS_CHECKED:
				ruleObject.method = SF.FormValidation.Rules.isChecked;
				break;
			case CV2PAYMENT_IS_SELECTED_WHEN_OPTION:
				ruleObject.method = SF.FormValidation.Rules.payment.cv2NotEmptyWhenOption;
				ruleObject.params = {optionFieldId : rule[2]};
				break;
			default:
				return false;
		}
		return ruleObject;
	};

	// Takes the validation rules assigned in the data-validation-rules attribute
	// and uses Adoro.FormValidator to add validation to the forms
	var setValidationRules = function(errorText){
		$("form").each(function(){
			// Gets ID of the error message container (an element with a class
			// of "errormessage")
			var errorContainer = $(this).find(".errormessage").get(0);
			// Only proceed if there is a container for the error message
			if (errorContainer) {
				var errorContainerID = errorContainer.id;

				if (errorText) {
					var formToValidate = new Adoro.FormValidator($(this).get(0), {
						errorClass: "fielderror",
						errorSummaryID: errorContainerID,
						errorSummaryHeaderTag: "p",
						errorSummaryHeaderSingleErrorBeforeHTML: Salmon.Utils.replaceWith(errorText.ERROR_SUMMARY_HEADER_SINGLE_BEFORE,"&nbsp;"," "),
						errorSummaryHeaderSingleErrorAfterHTML: Salmon.Utils.replaceWith(errorText.ERROR_SUMMARY_HEADER_SINGLE_AFTER,"&nbsp;"," "),
						errorSummaryHeaderMultiErrorBeforeHTML: Salmon.Utils.replaceWith(errorText.ERROR_SUMMARY_HEADER_MULTI_BEFORE,"&nbsp;"," "),
						errorSummaryHeaderMultiErrorAfterHTML: Salmon.Utils.replaceWith(errorText.ERROR_SUMMARY_HEADER_MULTI_AFTER,"&nbsp;"," "),
						errorTitleSingleErrorBeforeHTML: Salmon.Utils.replaceWith(errorText.ERROR_TITLE_SINGLE_BEFORE,"&nbsp;"," "),
						errorTitleSingleErrorAfterHTML: Salmon.Utils.replaceWith(errorText.ERROR_TITLE_SINGLE_AFTER,"&nbsp;"," "),
						errorTitleMultiErrorBeforeHTML: Salmon.Utils.replaceWith(errorText.ERROR_TITLE_MULTI_BEFORE,"&nbsp;"," "),
						errorTitleMultiErrorAfterHTML: Salmon.Utils.replaceWith(errorText.ERROR_TITLE_MULTI_AFTER,"&nbsp;"," ")
					});
				} else {
					var formToValidate = new Adoro.FormValidator($(this).get(0), {
						errorClass: "fielderror",
						errorSummaryID: errorContainerID,
						errorSummaryHeaderTag: "p"
					});
				}

				// For a form, loops through each field where a validation rule is set
				var fieldsToValidate = $(this).find("input[data-validation-rules], select[data-validation-rules], textarea[data-validation-rules]").get();
				for (var c = 0; c < fieldsToValidate.length; c++){
					var fieldRules = fieldsToValidate[c].attributes.getNamedItem("data-validation-rules").nodeValue.split(";");
					var ruleData = [];
					// For a field, loops through each validation rule
					for (var i = 0; i < fieldRules.length; i++){
						// TODO: AntJ, get value returned from getRuleObject into a var
						//       and test it before passing it to addValidator
						formToValidate.addValidator(fieldsToValidate[c].name,[getRuleObject(fieldRules[i])]);
					}
				}
				// Set up any contextual validation groups
				setValidationGroups($(this),formToValidate);
			}
		});
	};

	/* Uses the values in the data-validation-rules attribute
	 * to set up contextual validation groups
	 * @function
	 * @param {jQuery} jqForm Form we are checking for groups
	 * @param {Adoro.FormValidator} fvObj Form validator object we are adding groups to
	 */
	var setValidationGroups = function(jqForm,fvObj){
		var groupFields = [];

		// Loops through any form buttons (or links) that have the custom
		// attribute "data-validation-group".
		var formButtons = jqForm.find("input[data-validation-group]").get();
		for (var c = 0; c < formButtons.length; c++){
			var groupName = formButtons[c].attributes.getNamedItem("data-validation-group").nodeValue;
			var fieldsInGroup = jqForm.find("input[data-validation-groupset*='" + groupName + "'], select[data-validation-groupset*='" + groupName + "'], textarea[data-validation-groupset*='" + groupName + "']").get();
			groupFields = [];
			for (var i = 0; i < fieldsInGroup.length; i++) {
				groupFields.push(fieldsInGroup[i].name);
			}
			fvObj.addGroup(formButtons[c].id,groupFields);
		}
	};



}); // End SF.FormValidation

// Validation functions 
// TODO: naming and move to adoro.formrules
SF.FormValidation.Rules = {
	isSelected : function() {
		var field = this;
		return (field[0].options[field[0].selectedIndex].value.length>0);
	},

	isSelectedWhenOption : function(param){
		var optionField = document.getElementById(param.optionFieldId);
		if (optionField) {
			if (optionField.checked) {
				return SF.FormValidation.Rules.isSelected.call(this);
			}
		}
		return true; // Is this the right way to do this?
	},

	notEmptyWhenOption : function(param){
		var optionField = document.getElementById(param.optionFieldId);
		if (optionField) {
			if (optionField.checked) {
				return Adoro.FormRules.notEmpty.call(this);
			}
		}
		return true; // Is this the right way to do this?
	},

	isChecked : function() {
		var field = this;
		return field[0].checked;
	},
	
	isDate : function() {
		var field = this;
		var datecomps=field.value.split("/");
		var isDate=((datecomps.length==3)&&(datecomps[2].length==4)&&(parseInt(datecomps[1])<=12)&&parseInt(datecomps[0])<=31);
		return isDate;
	},
	
	isTime : function() {
		var field = this;
		var timecomps=field.value.split(":");
		var isTime=((timecomps.length==2)&&(parseInt(timecomps[0])<24)&&(parseInt(timecomps[1])<=60));
		return isTime;
	},
	
	isAlphanumeric : function() {
		var field = this;
		var exp = new RegExp("[^A-Za-z0-9 ]");
		return !exp.test(field.value);
	},
	
	isUkPostCode : function() {
		var field = this;
        var str = field[0].value.toUpperCase().replace(/\s/,"");
		if (str.length < 5 || str.length > 7 || !str.match( /^[A-Z\d]{2,4}\d[A-Z]{2}$/ )) return false;
		else return true;
	},

	payment: {
		isSelected : function(){
			var valid = true;
			var paymentOutstanding = document.getElementById("paymentoutstanding");
			if (paymentOutstanding && paymentOutstanding.value === "true") {
				valid = SF.FormValidation.Rules.isSelected.call(this);
			}
			return valid;
		},

		isSelectedWhenOption : function(param){
			var valid = true;
			var paymentOutstanding = document.getElementById("paymentoutstanding");
			if (paymentOutstanding && paymentOutstanding.value === "true") {
				valid = SF.FormValidation.Rules.isSelectedWhenOption.call(this,param);
			}
			return valid;
		},
	
		notEmpty : function(){
			var valid = true;
			var paymentOutstanding = document.getElementById("paymentoutstanding");
			if (paymentOutstanding && paymentOutstanding.value === "true") {
				valid = Adoro.FormRules.notEmpty.call(this);
			}
			return valid;
		},
	
		notEmptyWhenOption : function(param){
			var valid = true;
			var paymentOutstanding = document.getElementById("paymentoutstanding");
			if (paymentOutstanding && paymentOutstanding.value === "true") {
				valid = SF.FormValidation.Rules.notEmptyWhenOption.call(this,param);
			}
			return valid;
		},
		
		/*
		 * make sure cv2 is only required when storedcard radio is selected and the chosen card is not a store card
		 */
		cv2NotEmptyWhenOption : function(param){
			var valid = true;
			var storedCardSelect = document.getElementById("paymentMethodId");
			var paymentOutstanding = document.getElementById("paymentoutstanding");
			if(!storedCardSelect || !paymentOutstanding) return valid;
			var optionCssClass = storedCardSelect.options[storedCardSelect.selectedIndex].className;
			
			if(optionCssClass !== "storecard") {
				if (paymentOutstanding.value === "true") {
					valid = SF.FormValidation.Rules.notEmptyWhenOption.call(this,param);
				}
			}

			return valid;
		}
	}
}