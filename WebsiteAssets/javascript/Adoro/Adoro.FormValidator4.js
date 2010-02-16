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
			for(var i = 0; i<rules.length;i++) {
				validator.addRule(rules[i]);
			}
		}
		// else create a new validator
		else {
			
			validator = new Validator($field, fieldName, rules);
			
			// at this point in the code we should potentially add the rules
			// instead of simply passing the rules array to the constructor
			
			validators.push(validator);
		}	
		
		return me; // should i return form of validator - i think validator?
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
		// return a list of errors
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
			// add rule
			
			//alert(typeof Adoro.FormValidator.Rule);
			
			var rule = new Adoro.FormValidator.Rule();
			//this.rules.push({method: method, message: message, params: params})
		},
		removeRule: function(method) {
			// remove rule	
		},
		validate: function() {
			// loop through rules and set any rules to hasError true
		}
	}
}
Adoro.FormValidator.Rule = function(method, message, params) {
	this.method = method;
	this.message = message;
	this.params = params || null;
}
Adoro.FormValidator.Rule.prototype = {
	hasError: false,
	setErrorState: function() {	},
	getErrorState: function() {	}
}