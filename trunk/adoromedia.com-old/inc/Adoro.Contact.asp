<%
	if(typeof Adoro !== "object") var Adoro = {};
		
	var contactForm = new Adoro.Form();
	contactForm.addValidator("fullName",[{
		method: Adoro.Rules.required,
		message: "Full name is required."
	}]);
	contactForm.addValidator("email",[{
		method: Adoro.Rules.required,
		message: "Email is required."
	},{
		method: Adoro.Rules.isEmail,
		message: "Email is invalid."
	}]);
	contactForm.addValidator("message", [{
		method: Adoro.Rules.required,
		message: "Message is required."
	}])
	
	if(Request.Form("sendMessage") == "Send") {
		if(contactForm.validate()) {
			var email = Server.CreateObject("CDO.Message");
			email.From = "website@adoromedia.com";
			email.To = "info@adoromedia.com";
			email.Subject = "Website: Adoro Media";
			email.HTMLBody = "<h1>Adoro Media Website Form</h1>";
			email.HTMLBody += "<p>Full Name: " + Request.Form("fullName") +"</p>";
			email.HTMLBody += "<p>Email: " + Request.Form("email") +"</p>";
			email.HTMLBody += "<p>Message: " + Request.Form("message") +"</p>";
			//email.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/sendusing")=2;
			//email.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpserver")="localhost";
			//email.Configuration.Fields.Item("http://schemas.microsoft.com/cdo/configuration/smtpserverport")=25;
			//email.Configuration.Fields.Update();
			email.Send();
			var messageSent = true;
		}
	}
%>

