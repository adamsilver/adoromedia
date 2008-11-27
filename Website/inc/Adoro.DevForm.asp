<%
	if(typeof Adoro !== "object") var Adoro = {};
	var devForm = new Adoro.Form();
	if(Request.Form.Count > 0) {
		if(Request.Form("contextualSubmitButton").Count > 0) {
			devForm.addValidator("day01", [{
				method: Adoro.Rules.required,
				message: "Day 1 required"
			}]);
			devForm.addValidator("month01", [{
				method: Adoro.Rules.required,
				message: "Month 1 required"
			}]);
			devForm.addValidator("year01", [{
				method: Adoro.Rules.required,
				message: "Year 1 required"
			}]);						
			if(devForm.validate()) {
				// do something
			}
		}
		else {

			devForm.addValidator("fullName",[{
				method: Adoro.Rules.required,
				message: "The full name is required"
			}]);
			devForm.addValidator("fullName",[{
				method: Adoro.Rules.isPassword,
				message: "The full name must be adoro server side only"
			}]);			
			devForm.addValidator("age", [{
				method: Adoro.Rules.required,
				message: "Age is required"
			}]);
			devForm.addValidator("terms", [{
				method: Adoro.Rules.requiredGroup,
				message: "Terms are required"
			}]);
			devForm.addValidator("day01", [{
				method: Adoro.Rules.required,
				message: "Day 1 required"
			}]);
			devForm.addValidator("month01", [{
				method: Adoro.Rules.required,
				message: "Month 1 required"
			}]);
			devForm.addValidator("year01", [{
				method: Adoro.Rules.required,
				message: "Year 1 required"
			}]);
			devForm.addValidator("day02", [{
				method: Adoro.Rules.required,
				message: "Day 2 required"
			}]);
			devForm.addValidator("month02", [{
				method: Adoro.Rules.required,
				message: "Month 2 required"
			}]);
			devForm.addValidator("year02", [{
				method: Adoro.Rules.required,
				message: "Year 2 required"
			}]);
			devForm.addValidator("searchEngine", [{
				method: Adoro.Rules.requiredGroup,
				message: "Search engine required"
			}]);
			devForm.addValidator("gender", [{
				method: Adoro.Rules.requiredGroup,
				message: "Gender required"
			}]);
			devForm.addValidator("friends", [{
				method: Adoro.Rules.requiredGroup,
				message: "Friends required"
			}]);		
			if(devForm.validate()) {
				// do something
			}		
		}
	
		}
%>
