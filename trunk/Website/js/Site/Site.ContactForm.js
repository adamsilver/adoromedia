if(typeof Adoro !== "object") var Adoro = {};
$(document).ready(function(){ 
	Adoro.ContactForm = new(function(){
		var contactForm = document.getElementById("contactForm");
		if(contactForm === null) return;
		var form = new Adoro.FormValidator(contactForm);
		form.addValidator("fullName",[{
			method: Adoro.FormRules.notEmpty,
			message: "Full name is required."
		}]);
		form.addValidator("email",[{
			method: Adoro.FormRules.notEmpty,
			message: "Email is required."
		},{
			method: Adoro.FormRules.emailAddress,
			message: "Email is invalid."
		}]);
		form.addValidator("message",[{
			method: Adoro.FormRules.notEmpty,
			message: "Message is required."
		}]);					
	});
});