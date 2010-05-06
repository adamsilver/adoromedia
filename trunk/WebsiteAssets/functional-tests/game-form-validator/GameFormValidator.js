/******************************************************************
* inheritance option 1
******************************************************************/
var App = App || {};

App.FormValidator = function(node) {
	this.superClass.call(this,node);
	
	var oldAddValidator = this.addValidator;
	var oldGetValidator = this.getValidator;
	
	function FieldHandler($input) {						
		var $field = $input.parents("div.field");
		
		this.fail = function(message) {
			$field.find("div.message").remove();
			$field.append('<div class="message">'+message+'</div>');
		}
		
		this.success = function() {
			var message = "all gooooOOooood!";
			$field.find("div.message").remove();
			$field.append('<div class="message">'+message+'</div>');
		}
	}
	
	//var oldAddEventHandler;
	/*
	this.addValidator = function(fieldName, rules, options) {
		var v = oldAddValidator(fieldName, rules, options);
		
		var fh;
		
		
		this.addEventHandler(fieldName+".onFieldFail", function(e, field, invalidRules) {
			if(!fh) {
				fh = new FieldHandler($(field));
			}
			fh.fail(invalidRules[0].message);
		});
		
		this.addEventHandler(fieldName+".onFieldSuccess", function(e, field) {
			if(!fh) {
				fh = new FieldHandler($(field));
			}
			fh.success();
		});					
		
		
		$(node).find('[name="'+fieldName+'"]').bind("blur", function(e){
			oldGetValidator(fieldName).validate();
		});
		
		return v;
	}*/
	
}
App.FormValidator.prototype = new Adoro.FormValidator();
App.FormValidator.prototype.superClass = Adoro.FormValidator;

/******************************************************************
* inheritance option 2
******************************************************************/

function GameFormValidator(node) {
	var fv = new Adoro.FormValidator(node);
	
	function FieldHandler($input) {						
		var $field = $input.parents("div.field");
		
		this.fail = function(message) {
			$field.find("div.message").remove();
			$field.append('<div class="message">'+message+'</div>');
		}
		
		this.success = function() {
			var message = "all gooooOOooood!";
			$field.find("div.message").remove();
			$field.append('<div class="message">'+message+'</div>');
		}
	}
	
	fv.addEventHandler("onFormValidateStart", function() {
		$(node).find("div.message").remove();
	});
	
	this.addValidator = function(fieldName, rules, options) {
		var v = fv.addValidator(fieldName, rules, options);
		
		var fh;
		
		fv.addEventHandler(fieldName+".onFieldFail", function(e, field, invalidRules) {
			if(!fh) {
				fh = new FieldHandler($(field));
			}
			fh.fail(invalidRules[0].message);
		});
		
		fv.addEventHandler(fieldName+".onFieldSuccess", function(e, field) {
			if(!fh) {
				fh = new FieldHandler($(field));
			}
			fh.success();
		});						
		
		$(node).find('input[name="'+fieldName+'"]').bind("blur", function(e){
			fv.getValidator(fieldName).validate();
		});
		
		return v;
	}
	
	for(var key in fv) {
		if(this[key]) continue;
		this[key] = fv[key];
	}		
}