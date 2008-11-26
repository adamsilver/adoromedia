<%
	if(typeof Adoro !== "object") var Adoro = {};
	
	var loginForm = new Adoro.Form();
	loginForm.addValidator("username",[{
		method: Adoro.Rules.required,
		message: "Username is required."
	},{
		method: Adoro.Rules.isUsername,
		message: "Username is invalid."
	}]);
	loginForm.addValidator("password",[{
		method: Adoro.Rules.required,
		message: "Password is required."
	},{
		method: Adoro.Rules.isPassword,
		message: "Password is invalid."
	}]);
	
	if(Request.Form("loginSubmit") == "Login") {
		if(loginForm.validate()) {
			Session("Logged_In") = true;
		}
	}
%>