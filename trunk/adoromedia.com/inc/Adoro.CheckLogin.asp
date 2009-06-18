<%
	if(typeof Adoro !== "object") var Adoro = {};
	Adoro.CheckLogin = function() {
		if (Session("Logged_In") != true) {
			Response.Redirect(Adoro.URL+"login.asp"+"?currentURL="+Adoro.getCurrentURL());
			Response.Flush();
			Response.End();
		}
	}
	Adoro.CheckLogin();
%>