<%
	if(typeof Adoro !== "object") var Adoro = {};
	
	Adoro.Rules = {
		required: function(value) {
			var result = true;
			if(value == "") {
				result = false;
			}
			return result;
		},
		requiredGroup: function(value) {
			var result = true;
			if(value.Count <= 0) {
				result = false;
			}
			return result;
		},
		isUsername: function(value) {
			var result = true;
			if(value!="adoro") {
				result = false;
			}
			return result;
		},
		isPassword: function(value) {
			var result = true;
			if(value!="adoro") {
				result = false;
			}
			return result;
		},
		isEmail: function(value) {
			var r = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$");
			var result = true;
			if(!r.test(value)) {
				result = false;
			}
			return result;
		}
	}
	
	Adoro.Form = function() {
		var errors = [];
		var validators = [];
		
		this.addValidator = addValidator;
		function addValidator(name, rules) {
			validators.push(new Validator(name, rules))
		}
		
		this.validate = validate;
		function validate() {
			var v;
			var rules;
			var rule;
			var valid = false;
			for(var i = 0; i<validators.length;i++) {
				v = validators[i];
				rules = v.rules;
				for(var j = 0;j<rules.length;j++) {
					var rule = rules[j];
					if(typeof rule.method === "function"){
						valid = rule.method(Request.Form(v.name));
						if(!valid) {
							errors.push(new Error(v.name, rule.message));
							break; // so we dont have more than 1 error per field
						}
					}
				}
			}
			return (errors.length == 0);
		}
		
		this.showErrors = showErrors;
		function showErrors() {
			var message = "";
			var errorText = "errors";
			if(errors.length > 0) {
				if(errors.length == 1) {
					errorText = "error";
				}
				message += '<div id="errorMessage"><h3>The form has '+ errors.length + ' ' + errorText + '. Please check.</h3><ul>';
				for ( var i = 0; i<errors.length; i++ ) {
					message += '<li><a href="#'+errors[i].id+'">'+errors[i].message+'</a></li>';
				}
				message +='</ul></div>';
			}
			else {
				message +=	'<div id="errorMessage" class="hide">';
				message +=	'</div>';
			}
			Response.Write(message);
		}		
		
		function Validator(name, rules) {
			this.name = name;
			this.rules = rules;
		}
		
		function Error(id, message) {
			this.id = id;
			this.message = message;
		}
		
		this.writeErrorClass = writeErrorClass;
		function writeErrorClass(collection) {
			var fieldName;
			var foundError = false;
			for(var i = 0;i<collection.length && !foundError;i++) {
				fieldName = collection[i];
				for(var j = 0;j<errors.length;j++) {
					if(fieldName == errors[j].id) {
						foundError = true;
						Response.Write('error');
						break;
					}
				}
			}			
		}
		
		this.writeErrorSpan = writeErrorSpan;
		function writeErrorSpan(collection) {
			var fieldName;
			for(var i = 0;i<collection.length;i++) {
				fieldName = collection[i];
				for(var j = 0;j<errors.length;j++) {
					if(fieldName == errors[j].id) {
						Response.Write('<span class="errorText">error</span>');
						break;
					}
				}
			}			
		}
		
		this.writeChecked = writeChecked;
		function writeChecked(field, value) {
			for(i = 1; i <= field.Count(); i++) {
				key = field(i);
				if(key==value) {
					Response.Write('checked="checked"');
					break;
				}	
			}
		}
		
		this.writeSelected = writeSelected;
		function writeSelected(field, value) {	
			for(i = 1; i <= field.Count(); i++) {
				key = field(i);
				if(key==value) {
					Response.Write('selected="selected"');
					break;
				}	
			}	
		}
		
	}
%>
