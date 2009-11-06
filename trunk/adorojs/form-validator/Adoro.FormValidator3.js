var Adoro = Adoro || {};

Adoro.isArray = function(value) {
	return Object.prototype.toString.apply(value) === '[object Array]';
}

Adoro.FormValidator = function(formNode, options) {
	var me = this;

	// collections
	var validators = [];
	var errors = [];
	var contextualGroups = [];
	
	// other bits
	var lastClickedButton = null;
	
	// options
	var options = options || {};
	var onValidateStart = options.onValidateStart || null;
	var onValidateComplete = options.onValidateComplete || null;
	var onFormError = options.onFormError || null;
	var onFormSuccess = options.onFormSuccess || null;
	var onClearErrors = options.onClearErrors || null;
	
	$(formNode).bind("submit", function(e){
		return validate.call(formNode);
	});
	
	function validate() {
		if(typeof onValidateStart === "function") onValidateStart.call(me);
		clearErrors();
	
		var validator, field, key;
		for (var i = 0; i < validators.length; i++) {
			validator = validators[i];
			field = validator.field;
			key = validator.key;
			
			// if it is a contextual submit button 
			// make sure the validator is applied...
			// ...to that contextualGroup before validating it
			if((isContextualSubmit() && !inGroupRuleKeys(getLastFiredButton(), key))) continue;
			
			// loop through all rules in that validator
			validator.validate();
		}
		
		if(typeof onValidateComplete === "function") onValidateComplete.call(me);
		
		if(hasErrors()) {
			if(typeof onFormError === "function") onFormError.call(me, errors);
		}
		else {
			if(typeof onFormSuccess === "function") onFormSuccess.call(me);
		}
		
		resetLastFiredButton();
		return errors.length === 0;
	}
	
	function Validator(field, rules, options) {
		var me = this;
		this.key = $(field).attr("name");
		this.field = field;
		this.rules = rules;
		
		var options = options || {};
		var onFieldValidate = options.onFieldValidate || null;
		var onFieldError = options.onFieldError || null;
		var onFieldSuccess = options.onFieldSuccess || null;
		var validateOnBlur = options.validateOnBlur || false;
		
		if(validateOnBlur) {
			$(field).bind("blur", validate);
		}
		
		function validate() {
		
			if(typeof onFieldValidate === "function") onFieldValidate.call(field);
			// run thru all rules
			var rule, valid=true, params;
			for (var j = 0; j < rules.length; j++) {
				rule = rules[j];
				params = rule.params || {};
				valid = rule.method.call(field, params);
				if (!valid) {
					addError(me.key, rule.message);
					if(typeof onFieldError === "function") onFieldError.call(field, rule);
					break;
				}
			};
			
			if(valid) {
				if(typeof onFieldSuccess === "function") onFieldSuccess.call(field, rule);
			}
		}
		
		this.validate = validate;
	};	
	
	function isContextualSubmit() {
		var b = false;
		// may wanna check here to see if group even exists
		if(getLastFiredButton() !== null) {
			b = true;
		}
		return b;
	}
	
	function hasErrors() {
		return errors.length > 0;
	}
	
	/**
	 * check if the validator should be validated for this contextual group activation
	 * @function
	 * @private
	 * @param {Node} trigger To check trigger
	 * @param {String} key To check rule
	 * @return {Boolean} true when it should be validated false otherwise
	 */
	function inGroupRuleKeys(trigger, key) {
		if(!trigger) return false;
		var isInRuleKeys = false;
		var group, groupKey;
		for(var i = 0; i < contextualGroups.length; i++) {
			group = contextualGroups[i];
			if(group.trigger === trigger) {
				for(var j = 0; j < group.ruleKeys.length; j++) {
					groupKey = group.ruleKeys[j];
					if(groupKey === key) {
						isInRuleKeys = true;
						break;
					}
				}
				break;
			}
		}
		return isInRuleKeys;
	}	
		
	function clearErrors() {
		errors = [];
		if(typeof onClearErrors === "function") onClearErrors.call(me, validators);
	}
	
	function addError(fieldName, message) {
		errors.push(new Error(fieldName, message));
	}
	
	/**
	 * is rule valid
	 * @function
	 * @private
	 * @param {Object} rule The rule object which containes two properties, method and message
	 * @return {boolean} true when valid otherwise false
	 */
	function isRuleValid(rule) {
		var valid = true;
		if(typeof rule !== "object" || Adoro.isArray(rule) === "array") {
			valid = false;
		}
		if(typeof rule.method !== "function") {
			valid = false;
		}
		if(typeof rule.message !== "string") {
			valid = false;
		}
		return valid;
	}	

	/**
	 * Create a new error object
	 * @class Represents an error
	 * @name Error
	 * @constructor
	 * @private
	 * @param {String} id The id for the field that caused the error
	 * @param {String} message The message for the error
	 */
	function Error(id, message) {
		this.id = id;
		this.message = message;
	}
	
	/**
	 * Create a new contextual group
	 * @class Represents a contextual group
	 * @constructor
	 * @private
	 * @param {Node} trigger DOM reference to contextual submit button
	 * @param {String[]} ruleKeys Array of keys (field 'names') that reference existing form fields
	 */
	function ContextualGroup(trigger, ruleKeys) {
		this.trigger = trigger;
		this.ruleKeys = ruleKeys;
		$(trigger).bind("click", trigger_onClick);
		
		function trigger_onClick() {
			lastClickedButton = this;
		}
	}
	
	/**
	 * add a new contextual group for the form
	 * @function
	 * @public
	 * @param {String} triggerID The ID of the contextual submit button
	 * @param {String[]} ruleKeys Array of keys that reference existing form fields
	 */
	function addContextualGroup(triggerID, ruleKeys) {
		var trigger = document.getElementById(triggerID);
		if(!trigger) return;
		contextualGroups.push(new ContextualGroup(trigger, ruleKeys));
	}	
	
	
	// WORK IN PROGRESS
	function removeContextualGroup(triggerId) {
		var trigger = document.getElementById(triggerID);
		if(!trigger) return;
		for(var i = 0; i < contextualGroups.length; i++) {
			if(contextualGroups[i].trigger === trigger) {
				
			}
		}
	}

	/**
	 * add a new validator to the form
	 * @function
	 * @public
	 * @param {string} fieldName (which references element name)
	 * @param {Object[]} rule
	 * @param {Function} rule.method
	 * @param {Array} rule.params
	 * @param {String} rule.message
	 */
	function addValidator(fieldName, rules, options) {
		var field = $(formNode).find("[name='"+fieldName+"']");
		if(field.length === 0) return;
		if(!Adoro.isArray(rules)) return;
		var validRules = [];
		var rule;
		for(var i = 0; i < rules.length; i++) {
			rule = rules[i];
			if(isRuleValid(rule)) {
				validRules.push(rule);
			}
		}
		
		if (validRules.length > 0) {
			validators.push(new Validator(field, validRules, options));
		}
		
		return this;
	}	
	
	/**
	 * remove a validator from the form
	 * remove the whole validator or remove particular rules for the validator
	 * @param {String} key The key for the validator being the name of the field
	 * @param {String[]} ruleKeys Array of strings representing the names of the rule methods
	 * @return {Object} this To enable chaining
	 */
	function removeValidator(key, ruleKeys) {
		var ruleKeys = ruleKeys || null;
		var validator, rule;
		var numberOfItemsToRemoveFromArray = 1;
		for(var i = 0; i<validators.length; i++) {
			validator = validators[i];
			// at this point we get the key i.e name of field
			// and if there are ruleKeys
			if(validator.key === key) {
				// remove just the key in question
				if(Adoro.isArray(ruleKeys)) {
					// loop thru rules in validator
					for(var j = 0; j < validator.rules.length; j++) {
						rule = validator.rules[j];
						for(var k = 0; k < ruleKeys.length; k++) {
							if(Adoro.FormRules[ruleKeys[k]] === rule.method) {
								validator.rules.splice(j,numberOfItemsToRemoveFromArray);
								j--; //we altered the array so carry on looping from the same point.
							}
						}
					}
				}
				// remove whole validator
				else {
					validators.splice(i, numberOfItemsToRemoveFromArray);
				}
			}
		}
		return this;
	}	
	
	function getLastFiredButton() {
		return lastClickedButton;
	}
	
	function resetLastFiredButton() {
		lastClickedButton = null;
	}	
	
	
	// public members
	this.addValidator = addValidator;
	this.removeValidator = removeValidator;
	this.addContextualGroup = addContextualGroup;
	//this.removeContextualGroup = removeContextualGroup;
	this.addError = addError;
	//this.removeError = removeError;
}