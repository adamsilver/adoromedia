var AppFormHelper = {
	createBasicField: function(fv, $formNode, fieldName) {
		fv.addEventHandler(fieldName+".onFieldFail", function(e, $field, invalidRules) {
			var $divField = $field.parents("div.field");
			$divField.addClass("fieldError");

			var $errorMessage = $("<div></div>", {
				"class": "errorMessage"
			}).appendTo($divField);
			$errorMessage.html(invalidRules[0].messages[0]);
		});
		fv.addEventHandler(fieldName+".onFieldValidateStart", function(e, $field) {
			var $divField = $field.parents("div.field");
			$divField.find("div.errorMessage").remove();
		});
		fv.addEventHandler(fieldName+".onFieldSuccess", function(e, $field) {
			var $divField = $field.parents("div.field");
			$divField.addClass("fieldSuccess");
		});
		
		$formNode.find("[name="+fieldName+"]").bind("blur", function() {
			fv.getValidator(fieldName).validate();
		});
	},
	populateErrorSummary: function($el, errors) {
		var $h2 = $("<h2>Some generic error message</h2>");
		var $ul = $("<ul></ul>");
		
		var html = "", currentFieldName = null;
		for(var i = 0; i < errors.length; i++) {
			if(currentFieldName === errors[i].fieldName) continue;
			currentFieldName = errors[i].fieldName;
			html += '<li><a href="#'+errors[i].fieldName+'">';
			html += errors[i].messages[1];
			html += '</a></li>';
		}			
		
		$ul.html(html);
		$el.append($h2);
		$el.append($ul);
		$el.removeClass("hide");	
	},
	clearErrorSummary: function($el) {
		$el.html("");
		$el.addClass("hide");
	}
}

var TestFormVal = new (function(){
	$(init);
	
	var formNode = null,
		$formNode = null,
		fv = null;
	
	function init() {
		formNode = document.getElementById("testForm");
		$formNode = $(formNode);
		if(!formNode) return;
		fv = new Adoro.FormValidator(formNode);
		setupValidators();
		setupFormSubmit();
		setupFieldFocus();
		setupEnter();
	}
	
	function setupEnter() {
		$formNode.find("input, select, textarea").bind("keydown", function(e) {
			if (e.keyCode === 13) {
				$formNode.find("div.helpHint").hide();
			}
		});
	}
	
	function setupFieldFocus() {
		$("form div.field input, form div.field select, form div.field textarea").bind("focus", function(e) {
			var $divField = $(this).parents("div.field");
			$divField.find("div.errorMessage").remove();
			$divField.removeClass("fieldError");
			$divField.removeClass("fieldSuccess");
		});
	}
	
	function setupValidators() {
		
		/* firstName */
		
		fv.addValidator("firstName", [{
			method: Adoro.FormRules.notEmpty,
			messages: ["Required", "First name is empty, please fill it"]
		}]);
		AppFormHelper.createBasicField(fv, $formNode, "firstName");
		
		/* lastName */
		
		fv.addValidator("lastName", [{
			method: Adoro.FormRules.notEmpty,
			messages: ["Required", "Last name is empty, please fill it"]
		}]);
		AppFormHelper.createBasicField(fv, $formNode, "lastName");
		
		/*
		fv.addValidator("noVal", [{
			method: Adoro.FormRules.noValidation,
			messages: ["blah", "blah"]
		}]);
		AppFormHelper.createBasicField(fv, $formNode, "noVal");
		*/

		/* telephone */
		
		fv.addValidator("telephone", [{
			method: Adoro.FormRules.number,
			messages: ["Must be a number", "Telephone name must be a number yah?"]
		},{
			method: Adoro.FormRules.minLength,
			messages: ["blah","Should have a min length of 5"],
			params: {length: 5}
		}]);
		AppFormHelper.createBasicField(fv, $formNode, "telephone");		
		
	}
	
	function setupFormSubmit() {		
		fv.addEventHandler("onFormValidateStart", function() {
			var $errorSummary = $("#errorSummary");
			AppFormHelper.clearErrorSummary($errorSummary);
		});
		
		fv.addEventHandler("onFormFail", function(e, fv, errors) {
			var $errorSummary = $("#errorSummary");
			AppFormHelper.populateErrorSummary($errorSummary, errors);
		});
		
		$formNode.bind("submit", function(e) {
			return fv.validate();
		});
	}
	
});

