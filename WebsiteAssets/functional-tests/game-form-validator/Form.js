$(function() {
	var node = document.getElementById("form1");
	var fv = new Adoro.FormValidator(node);
	var $form = $(node);
	var elements = {};
	
	function FieldHandler($input) {						
		var $field = $input.parents("div.field");
		
		this.clear = function() {
			$field.find("div.message").remove();
		}
		
		this.fail = function(message) {
			this.clear();
			$field.append('<div class="message">'+message+'</div>');
		}
		
		this.success = function() {
			this.clear();
			var message = "all gooooOOooood!";
			$field.append('<div class="message">'+message+'</div>');
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
	
	/* firstName */
	
	fv.addValidator("firstName", [{
		method: Adoro.FormRules.notEmpty,
		message: "First name required"
	}]);
	addGenericFunctionality("firstName");
	
	/* email */
	
	fv.addValidator("email", [{
		method: Adoro.FormRules.notEmpty,
		message: "Email required"
	},{
		method: Adoro.FormRules.emailAddress,
		message: "Email is invalid"
	}]);
	addGenericFunctionality("email");
	
	/* expiry */
	
	fv.addValidator("month", [{
		method: Adoro.FormRules.notEmpty,
		message: "Month is required"
	}]);
	
	elements["month"] = {};
	elements["month"].element = $form.find('[name="month"]');
	elements["month"].fh = new FieldHandler(elements["month"].element);
	fv.addEventHandler("month.onFieldFail", fieldOnFail);	
	fv.addEventHandler("month.onFieldValidateStart", fieldOnValidateStart);	
	fv.addEventHandler("month.onFieldSuccess", function(e, field){
		// if the year is also valid show a success message
		// however they haven't necessarily had a chance to ensure
		// the year has a value yet. To cater for this the only thin
		// we could do is either
		// remove all events
		// validate and find out if ok
		// if !ok then return otherwise show success message
		// add events - just incase they then blur off the year field		
		return;
		fv.removeEventHandler("year.onFieldFail", fieldOnFail);
		fv.removeEventHandler("year.onFieldSuccess", fieldOnSuccess);
		var v = fv.getValidator("year").validate();		
		if(v) {
			elements["month"].fh.success();
		}
		fv.addEventHandler("year.onFieldFail", fieldOnFail);
		fv.addEventHandler("year.onFieldSuccess", fieldOnSuccess);
	});	
	
	elements["month"].element.bind("blur", fieldOnBlur);
	
	fv.addValidator("year", [{
		method: Adoro.FormRules.notEmpty,
		message: "Year is required"
	}]);	

	elements["year"] = {};
	elements["year"].element = $form.find('[name="year"]');
	elements["year"].fh = new FieldHandler(elements["year"].element);
	fv.addEventHandler("year.onFieldFail", function(e, field, invalidRules) {
		// this is good when the form is submitted as opposed to the field being blurred
		// it means that if month has invalid rules then dont override with year rules
		// as the field is sharing a space in the html to output a message etc
		// doesn't affect on blur really - would need to check
		if(fv.getValidator("month").getInvalidRules().length > 0) return;
		elements[field.attr("name")].fh.fail(invalidRules[0].message);
	});
	fv.addEventHandler("year.onFieldSuccess", fieldOnSuccess);
	elements["year"].element.bind("blur", function() {
		if(!fv.getValidator("month").validate()) return;		
		var v = fv.getValidator("year");
		v.validate();
	});
	
	fv.addValidator("postcode", [{
		method: Adoro.FormRules.notEmpty,
		message: "Postcode is invalid"
	}]);
	addGenericFunctionality("postcode");
	
	fv.addValidator("terms", [{
		method: Adoro.FormRules.minChecked,
		params: {minChecked: 1},
		message: "Check terms etc"
	}]);
	addGenericFunctionality("terms");
	
	fv.addValidator("choice", [{
		method: Adoro.FormRules.minChecked,
		params: {minChecked: 1},
		message: "Choose something you silly."
	}]);
	addGenericFunctionality("choice");
		
	fv.addValidator("date_yy", [{
		method: function() {
			return Adoro.FormRules.notEmpty.call($("#date_dd"));
		},
		message: "select a dd"
	},{
		method: function() {
			return Adoro.FormRules.notEmpty.call($("#date_mm"));
		},
		message: "select a mm"
	},{
		method: function() {
			return Adoro.FormRules.notEmpty.call($("#date_yy"));
		},
		message: "select a yy"
	}]);
	addGenericFunctionality("date_yy");

	$("#date_dd").bind("blur", function(e) {
		var v = fv.getValidator("date_yy");
		v.validate();
	});
	
	$("#date_mm").bind("blur", function(e) {
		var v = fv.getValidator("date_yy");
		v.validate();
	});
	
	var submitPostCodeClicked = false;
	
	$("#submitPostcode").bind("click", function() {
		submitPostCodeClicked  = true;
	});
	
	$form.submit(function() {
		$form.find("div.message").remove();
		var valid = true;
		if(submitPostCodeClicked) {
			valid = fv.validate(["postcode"]);
		}
		else {
			valid = fv.validate();
		}
		submitPostCodeClicked = false;
		return valid;
	});

});