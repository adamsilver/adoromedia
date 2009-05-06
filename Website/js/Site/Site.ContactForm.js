var Site = Site || {};
Site.ContactForm = new (function() {
	addDOMReadyEvent(init);
	function init() {
		var contactForm = document.getElementById("contactForm");
		if(!contactForm) return;
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
	};
});