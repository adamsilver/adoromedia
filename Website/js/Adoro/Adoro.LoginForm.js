if(typeof Adoro !== "object") var Adoro = {};
$(document).ready(function(){ 
	Adoro.LoginForm = new(function(){
		var loginForm = document.getElementById("loginForm");
		if(loginForm === null) return;
		var form = new Adoro.FormValidator(loginForm);
		form.addValidator("username",[{
			method: Adoro.FormRules.notEmpty,
			message: "Username is required."
		}]);
		form.addValidator("password",[{
			method: Adoro.FormRules.notEmpty,
			message: "Password is required."
		}]);					
	});
});