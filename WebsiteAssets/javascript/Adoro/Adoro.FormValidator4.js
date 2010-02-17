var Adoro = Adoro || {};
Adoro.FormValidator = function(formNode, options) {
	var me = this,
		$formNode = $(formNode),
		validators = [],
		fvId = new Date().getTime(),
		// form level custom events
		onFormValidateStart = "onFormValidate",
		onFormValidateComplete = "onFormValidateComplete",
		onFormFail = "onFormFail",
		onFormSuccess = "onFormSuccess",		
		// field level custom events
		onFieldValidateStart = "onFieldValidateStart",
		onFieldValidateComplete = "onFieldValidateComplete",
		onFieldFail = "onFieldFail",
		onFieldSuccess = "onFieldSuccess";
		
	this.addEventHandler = function(eventType, eventHandler) {
        $(document).bind([fvId, eventType].join("."), eventHandler);
    }

    this.removeEventHandler = function(eventType, eventHandler) {
        $(document).unbind([fvId, eventType].join("."), eventHandler);
    }
	
	this.addValidator = function(fieldName, rules) {
		var $field, validator;		
		if(arguments.length === 0) return me;
		if(typeof fieldName !== "string") return me;
		$field = $formNode.find("input[name='"+fieldName+"']");
		if($field.length === 0) return me;
		if(!$.isArray(rules)) rules = [];
		validator = me.getValidator(fieldName);
		
		// if the validator exists then add any rules to it
		if(validator) {
			if(rules.length !== 0) {
				addRulesToValidator(validator, rules);
			}
		}
		// else create a new validator
		else {
			validator = new Validator($field, fieldName);
			addRulesToValidator(validator, rules);
			validators.push(validator);
		}	
		
		return validator; // should i return form or validator - i think validator?
	}
	
	function addRulesToValidator(validator, rules) {
		for(var i = 0; i<rules.length;i++) {
			validator.addRule(rules[i]);
		}
	}
	
	this.removeValidator = function(fieldName) {
		if(arguments.length === 0) return me;
		if(typeof fieldName !== "string") return me;
		var validatorIndex = me.getValidatorIndex(fieldName);
		if(validatorIndex === null) return me;
		me.getValidators().splice(validatorIndex, 1);
		return me;
	}
	
	this.validate = function(fieldsArray, clearErrorsBoolean) {
		/*
			clear any errors
			loop through the fieldsArray
			run validator rules and set flag on the rule to error
		*/
	}
	this.getErrors = function() {
		var errors = [];
		// loop through all validators
			// loop through all rules
				// if rule.hasError
					// errors.push();
		return errors;
	}
	
	this.getValidators = function() {
		return validators;
	}
	
	this.getValidator = function(fieldName) {
		var o = null, validator;
		if(arguments.length === 0) return o;
		if(typeof fieldName !== "string") return o;
		for(var i = validators.length-1; i>=0; i--) {
			validator = validators[i];
			if(validator.fieldName === fieldName) {
				o = validator;
				break;
			}
		}
		return o;
	}
	
	this.getValidatorIndex = function(fieldName) {
		var o = null, validator;
		if(arguments.length === 0) return o;
		if(typeof fieldName !== "string") return o;
		for(var i = validators.length-1; i>=0; i--) {
			validator = validators[i];
			if(validator.fieldName === fieldName) {
				o = i;
				break;
			}
		}
		return o;
	}
	
	this.clearErrors = function() {
		// loop through all validators and its rules and set to error false
	}
	
	/**************************************************
	* Constructor: Validator
	**************************************************/
	
	function Validator($field, fieldName, rules) {
		var me = this;
		this.$field = $field;
		this.fieldName = fieldName;
		this.rules = rules || [];
	}
	Validator.prototype = {
		addRule: function(method, message, params) {
			var rule = null;
			if(arguments.length === 0) return this;
			if(typeof method !== "function") return this;
			if(typeof message !== "string") return this;
			if(typeof params !== "object") params = {};
			rule = new Adoro.FormValidator.Rule(method, message, params);
			this.rules.push(rule);
			return this;
		},
		removeRule: function(method) {
			var rules = this.getRules(),
				i = rules.length;
			if(!rules) return this;
			for(i; i>=0; i--) {
				if(rules[i].method === method) {
					rules.splice(i, 1);
					break;
				}
			}
			return this;	
		},
		getRules: function() {
			return this.rules || null;
		},
		validate: function() {
			// loop through rules and set any rules to hasError true
		}
	}
}

Adoro.FormValidator.Rule = function(method, message, params) {
	this.method = method;
	this.message = message;
	this.params = params || {};
}
Adoro.FormValidator.Rule.prototype = {
	hasError: false,
	setErrorState: function(value) {
		if(typeof value !== "boolean") return;
		this.hasError = value;
	},
	getErrorState: function() {
		return this.hasError;	
	}
}