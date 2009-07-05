var Site = Site || {};
Site.Projects = Site.Projects || {};
Site.Projects.FormValidator = new (function(){
	$(document).ready(function(){ 
		// get form to validate from DOM
		var devForm = document.getElementById("devForm");
		if(devForm === null) return;
		
		// create a new form to validate
		var myFormToValidate = new Adoro.FormValidator(devForm);
		
		// add validators for the form
		// chaining is optional
		myFormToValidate.addValidator("fullName",[{
			method: Adoro.FormRules.notEmpty,
			message: "Full name is required."
		},{
			method: Adoro.FormRules.emailAddress,
			message: "Full name for some reason should look like an email address."
		}]).addValidator("age",[{
			method: Adoro.FormRules.notEmpty,
			message: "You must fill in your age."
		}]).addValidator("terms",[{
			method: Adoro.FormRules.minChecked, 
			params: {
				minChecked: 1
			},
			message: "Terms need to be agreed."
		}]).addValidator("day01",[{
			method: Adoro.FormRules.notEmpty,
			message: "Day 1 is required."
		},{
			method: Adoro.FormRules.number,
			message: "Day 1 must be a number."
		}]).addValidator("month01",[{
			method: Adoro.FormRules.notEmpty,
			message: "Month 1 is required."
		},{
			method: Adoro.FormRules.number,
			message: "Month 1 must be a number."
		}]).addValidator("year01",[{
			method: Adoro.FormRules.notEmpty,
			message: "Year 1 is required."
		},{
			method: Adoro.FormRules.number,
			message: "Year 1 must be a number."
		}]).addValidator("searchEngine",[{
			method: Adoro.FormRules.minChecked,
			params: {
				minChecked: 2
			},
			message: "You must pick at least 2 search engines."
		}]).addValidator("day02",[{
			method: Adoro.FormRules.notEmpty,
			message: "You must fill in day 02."
		}]).addValidator("month02",[{
			method: Adoro.FormRules.notEmpty,
			message: "You must fill in month 02."
		}]).addValidator("year02",[{
			method: Adoro.FormRules.notEmpty,
			message: "You must fill in year 02."
		}]).addValidator("gender",[{
			method: Adoro.FormRules.minChecked, 
			params: {
				minChecked: 1
			},
			message: "You must fill select a gender."
		}]).addValidator("friends",[{
			method: Adoro.FormRules.notEmpty,
			message: "You must choose a friend."
		}]);	
		
		// add a contextual group
		// first param is the id of the submit button in the DOM that triggers the group
		// second param is the array of field names to contextually validate
		myFormToValidate.addGroup("contextualSubmitButton", ["day01", "month01", "year01"]);
		
		// override the message for a validator - useful if you override a default from server side text etc
		// this line could then be in the markup
		myFormToValidate.setMessage("fullName", "notEmpty", "Custom is not empty message");
		
		// remove a validator - can't think why you need it yet but surely useful
		// if you pass in just the first param the whole validator will be removed
		// if you pass in ruleKey(s) then those particular rule(s) will be removed
		myFormToValidate.removeValidator("fullName", ["emailAddress"]);		
	});
});