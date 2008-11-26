if (typeof Adoro !== "object") { var Adoro = {}; }
Adoro.DevForm = {};
$(document).ready(function(){ 
	Adoro.DevForm = new (function(){
		var devForm = document.getElementById("devForm");
		if(devForm === null) return;
		var form = new Adoro.FormValidator(devForm);
		form.addValidator("fullName",[{
			method: Adoro.FormRules.notEmpty,
			message: "Full name is required."
		}]).addValidator("terms",[{
			method: Adoro.FormRules.minChecked, 
			params: {
				minChecked: 1
			},
			message: "Terms need to be agreed."
		}]).addValidator("day01",[{
			method: Adoro.FormRules.notEmpty,
			message: "Day 1 is required."
		}]).addValidator("searchEngine",[{
			method: Adoro.FormRules.minChecked,
			params: {
				minChecked: 2
			},
			message: "You must pick at least 2 search engines."
		}]).addValidator("day02",[{
			method: Adoro.FormRules.notEmpty,
			message: "You must fill in day 02."
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
		
		form.addGroup("contextualSubmitButton", ["fullName", "day01"]);
		
		form.setMessage("fullName", "notEmpty", "blah");
		
		var el = $('<p class="remaining"></p>')[0];
		document.getElementById("message").parentNode.appendChild(el);
		var myFieldMax = new Adoro.FieldMaxLength(document.getElementById("message"),{
			statusIndicator: el,
			max: 400,
			beforeText: "You have: ",
			afterText: " chars remaining!"
		});
		
		
	});
});