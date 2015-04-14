<%
	var Adoro = Adoro || {};
	//Adoro.URL = "http://www.adoromedia.com";
	Adoro.URL = "http://localhost/adoromedia.com";
	//Adoro.URL = "http://localhost/adoro";
	//Adoro.URL = "/";
	
	Adoro.getCurrentURL = function() {
		var prot = "http";
    	var protocol = "http";
		if (Request.ServerVariables("HTTPS") != "off") {
			protocol = "https";
		}
		var domainname = Request.ServerVariables("SERVER_NAME");
		var filename = Request.ServerVariables("SCRIPT_NAME");
		var querystring = Request.ServerVariables("QUERY_STRING");
		return protocol + "://" + domainname + filename + "?" + querystring;
	}
	
	Adoro.Breadcrumb = {};
	Adoro.Breadcrumb.home = {	href:Adoro.URL+"/default.asp", text: "home"}
	Adoro.Breadcrumb.projects = {	href:Adoro.URL+"/projects",	text: "Projects"};
	
%>
