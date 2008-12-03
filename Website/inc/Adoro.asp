<%
	if(typeof Adoro !== "object") var Adoro = {};
	//Adoro.URL = "http://www.adoromedia.com/";
	Adoro.URL = "http://anakes/adoro/";
	//Adoro.URL = "http://localhost/adoro";
	
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
%>
