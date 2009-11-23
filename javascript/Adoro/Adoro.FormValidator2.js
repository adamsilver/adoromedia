if(typeof Adoro !== "object") var Adoro = {};
Adoro.FormValidator = new( function() {
	var performValidation = function() {
		var valid = true;
		var rules = this.rules;	
		var field = this.field;
		var params = null;
		for (var j = 0; j < rules.length; j++) {
			rule = rules[j];
			params = rule.params || {};
			valid = rule.method.call(field, params);
			if (!valid) {
				// when it is invalid i need to
					// create a new error for the form - but i havent got a reference to the form
					// highlight the field - i can do
					// insert an error span - i can do
				
				
				//OLD CODE IGNORE next 3 lines
				//validator.highlightFieldContainer();
				//validator.insertErrorSpan();
				//errors.push(new Error(key, rule.message));
				break;
			}
		}
		return valid;
		//this.details.method.call(this.details.field, this.details.params);
	}
	
	var Validators = function(form) {
		var validators = [];		
		this.validators = validators;
		this.add = function(fieldName, rules) {
			var field = $(this.formNode).find("[name='"+fieldName+"']");
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
				validators.push(new Validator(field, validRules));
			}
			//o.added = true;
			return this;
		}
		this.remove = function() {
			return this;
		}
		this.validate = function() {
			var valid = true;
			for (i = 0; i < validators.length; i++) {
				performValidation.call(validators[i]);
			}
		}
		
		function isRuleValid(rule) {
			var valid = true;
			if(typeof rule !== "object" || Adoro.isArray(rule)) {
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
		
	}
	
	var Validator = function(field, rules) {
		this.key = $(field).attr("name");
		this.field = field;
		this.rules = rules;
		this.fieldContainer = $(field).parents("div.field")[0];
		this.insertErrorSpan = function() {};
		this.highlightFieldContainer = function() {};
		this.removeErrorSpan = function() {};
		this.unhighlightFieldContainer = function() {};
		this.label = (function() {	})();
		// need access to the options for the form as it affects the validators
		//var errorSpan = $('<span class="'+ config.errorSpanClass +'">Error</span>')[0];
	}	
	
	var Errors = function() {
		var errors = [];
		this.length = errors.length;
		this.add = function(key, message){
			// do some checking and then push the bad boy
			errors.push(new Error());
		};
		
		this.clear = function() {
			// in here i need access to each of the validators so that i can
			// removeErrorSpan - no reference in this scope for the validators
			// unhighlightFieldContainer
		};
		this.remove = function(key) {} // not sure if we need this
	} 
	
	var Error = function(key, message) {
		this.key = key;
		this.message = message;
	}
	
	var Groups = function() {
		var collection = [];
		this.add = function(){};
		this.remove = function(){};
	}
	
	var Group = function(trigger, ruleKeys) {
		this.trigger = trigger;
		this.ruleKeys = ruleKeys;
		$(trigger).bind("click", trigger_onClick);
		
		function trigger_onClick() {
			//need access to the forms.lastFired propertiy
			//lastFired = this;
		}
	}
	
	var getFormConfig = function(options) {
		var options = options || {};
		return {
			errorClass: (typeof options.errorClass === "string") ? options.errorClass : "error",
			errorSummaryID: (typeof options.errorSummaryID === "string") ? options.errorSummaryID : "errorMessage",
			hideClass: (typeof options.hideClass === "string") ? options.hideClass : "hide",
			errorSpanClass: (typeof options.errorSpanClass === "string") ? options.errorSpanClass: "errorText"
		};
	}
	
	var form = function(formNode, options) {
		var options = getFormConfig(options);
		this.validators = new Validators();
		this.errors = new Errors();
		this.groups = new Groups();
		this.formNode = formNode;
		var me = this;
		$(formNode).bind("submit", function() {
			me.errors.clear();
			me.validate();
			return false;
		});
	}
	form.prototype.Validator = Validator;
	form.prototype.validate = function() {
		this.validators.validate();
	}
	
	return form;
});