$(function() {
	var node = document.getElementById("delivery");
	var fv = new Adoro.FormValidator(node);
	var $form = $(node);
	var elements = {};
	
	function FieldHandler($input) {						
		var $field = $input.parents("div.field");
		
		this.clear = function() {
			$field.find("div.message").remove();
			$field.removeClass("success");
			$field.removeClass("error");
		}
		
		this.fail = function(message) {
			this.clear();
			$field.append('<div class="message">'+message+'</div>');
			$field.addClass("error");
		}
		
		this.success = function() {
			this.clear();
			var message = "all gooooOOooood!";
			$field.addClass("success");
		}
	}

	function fieldOnBlur(e) {
		var v = fv.getValidator(e.target.name);
		v.validate();
	}
	
	function fieldOnValidateStart(e, field) {
		elements[field.attr("name")].fh.clear();
	}
	
	function fieldOnFail(e, field, invalidRules) {
		elements[field.attr("name")].fh.fail(invalidRules[0].message);
	}
	
	function fieldOnSuccess(e, field) {
		elements[field.attr("name")].fh.success();
	}
	
	function addGenericFunctionality(fieldName) {
		elements[fieldName] = {};
		elements[fieldName].element = $form.find('[name="'+fieldName+'"]');
		elements[fieldName].fh = new FieldHandler(elements[fieldName].element);
		elements[fieldName].element.bind("blur", fieldOnBlur);
		fv.addEventHandler(fieldName+".onFieldFail",fieldOnFail);
		fv.addEventHandler(fieldName+".onFieldValidateStart", fieldOnValidateStart);
		fv.addEventHandler(fieldName+".onFieldSuccess", fieldOnSuccess);
	}
	
	/* title */
	
	fv.addValidator("title", [{
		method: Adoro.FormRules.notEmpty,
		message: "Please select a title"
	}]);
	addGenericFunctionality("title");	
	
	/* firstName */
	
	fv.addValidator("firstName", [{
		method: Adoro.FormRules.notEmpty,
		message: "First name required"
	}]);
	addGenericFunctionality("firstName");
	
	/* lastName */
	
	fv.addValidator("lastName", [{
		method: Adoro.FormRules.notEmpty,
		message: "Last name required"
	}]);
	addGenericFunctionality("lastName");	
	
	/* contactNumber */
	
	fv.addValidator("contactNumber", [{
		method: Adoro.FormRules.notEmpty,
		message: "Contact number required"
	}]);
	addGenericFunctionality("contactNumber");		
	
	/* email */
	
	fv.addValidator("email", [{
		method: Adoro.FormRules.notEmpty,
		message: "Email required"
	},{
		method: Adoro.FormRules.emailAddress,
		message: "Email is invalid"
	}]);
	addGenericFunctionality("email");	
	
	fv.addValidator("confirmEmail", [{
		method: Adoro.FormRules.notEmpty,
		message: "Email required"
	},{
		method: Adoro.FormRules.emailAddress,
		message: "Email is invalid"
	}]);
	addGenericFunctionality("confirmEmail");
	
	fv.addValidator("rewardCard", [{
		method: Adoro.FormRules.number,
		message: "Reward card should be a number"
	}]);
	addGenericFunctionality("rewardCard");
	
	/* age */
	
	fv.addValidator("age", [{
		method: Adoro.FormRules.notEmpty,
		message: "Please select a title"
	}]);
	addGenericFunctionality("age");
	
	/* terms */
	
	fv.addValidator("terms", [{
		method: Adoro.FormRules.minChecked,
		message: "Please agree to t and c",
		params: {minChecked: 1}
	}]);
	addGenericFunctionality("terms");
	
	/* country */
	
	fv.addValidator("country", [{
		method: Adoro.FormRules.notEmpty,
		message: "Please select a country"
	}]);
	addGenericFunctionality("country");
	
	/* houseNameNumber */
	
	fv.addValidator("houseNameNumber", [{
		method: Adoro.FormRules.notEmpty,
		message: "House name or number required"
	}]);
	addGenericFunctionality("houseNameNumber");
	
	/* postcode */
	
	fv.addValidator("postcode", [{
		method: Adoro.FormRules.notEmpty,
		message: "Postcode required"
	}]);
	addGenericFunctionality("postcode");
	
});





