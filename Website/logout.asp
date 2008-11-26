<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="inc/Adoro.asp"-->
<!--#include file="inc/Adoro.Logout.asp"-->
<% Adoro.pageName = "logout"; %>
<% Adoro.siteSection = "logout" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Logout, Development, Adoro Media Ltd</title>
		<!--#include file="inc/head_other.asp"-->			
		<!--#include file="inc/head_css.asp"-->			
		<!--#include file="inc/head_cssie.asp"-->			
	</head>
	<body id="logout">
		<div id="container">
			<!--#include file="inc/header.asp"-->
			<div id="content">
				<h1>Logout</h1>
				<%if(Session("Logged_In") == true) {%>				
					<p>Please confirm that you wish to logout.</p>
					<form action="logout.asp" method="post">
						<div class="form">
							<div class="action">
								<input type="submit" class="submit" value="Logout" name="logoutSubmit" id="logoutSubmit" />
							</div>
						</div>
					</form>
				<%} else {%>
					<div id="successMessage">
						<h2>You are logged out. Go to the login page to log-in.</h2>
					</div>
				<%}%>
			</div>
			<!--#include file="inc/footer.asp"-->
		</div>
		<!--#include file="inc/ga.asp"-->
	</body>
</html>