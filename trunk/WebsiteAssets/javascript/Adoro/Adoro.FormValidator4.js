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
		if(arguments.length === 0) return me;
		if(typeof fieldName !== "string") return me;
		var $field = $formNode.find("input[name='"+fieldName+"']");
		if($field.length === 0) return me;
		if(!$.isArray(rules)) rules = [];		
		var v = new Validator($field, fieldName, rules);
		validators.push(v);
		return me;
	}
	
	this.removeValidator = function(fieldName, Rule) {
		// if no rule then remove whole validator
		
		// if rule then remove rule only
		
		// if validator has no more rules then remove whole validator		
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
	
	this.clearErrors = function() {
		// loop through all validators and its rules and set to error false
	}
	
	/**************************************************
	* inner classes
	**************************************************/
	
	function Validator($field, fieldName, rules) {
		var me = this;
		this.$field = $field;
		this.fieldName = fieldName;
		this.rules = [];
	}
	Validator.prototype = {
		addRule: function(method, message, params) {
			// add rule
		},
		removeRule: function(method) {
			// remove rule	
		},
		validate: function() {
			// loop through rules and set any rules to hasError true
		}
	}
	//should this be public on instance or static on object
	function Rule(method, message, params) {
		this.method = method;
		this.message = message;
		this.params = params || null;
	}
	Rule.prototype.hasError = false;
}