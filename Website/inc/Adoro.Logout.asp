<%
	if(Request.Form("logoutSubmit") == "Logout") {
			Session("Logged_In") = false;
	}
%>