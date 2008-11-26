<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="inc/Adoro.asp"-->
<!--#include file="inc/Adoro.Forms.asp"-->
<!--#include file="inc/Adoro.Login.asp"-->
<% Adoro.pageName = "login"; %>
<% Adoro.siteSection = "login" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Login, Development, Adoro Media Ltd</title>
		<!--#include file="inc/head_other.asp"-->	
		<!--#include file="inc/head_js.asp"-->	
		<!--#include file="inc/head_css.asp"-->	
		<!--#include file="inc/head_cssie.asp"-->
		<script type="text/javascript" src="js/Adoro/Adoro.FormValidator.js"></script>
		<script type="text/javascript" src="js/Adoro/Adoro.FormRules.js"></script>
		<script type="text/javascript" src="js/Adoro/Adoro.LoginForm.js"></script>		
		<script type="text/javascript" src="js/Adoro/Adoro.FieldHighlight.js"></script>
	</head>
	<body id="login">
		<div id="container">
			<!--#include file="inc/header.asp"-->
			<div id="content">
				<h1>Login</h1>
				<%if(Session("Logged_In") != true) {%>
					<% loginForm.showErrors(); %>
								
					<form action="login.asp" method="post" id="loginForm">
						<input type="hidden" name="URL" value="<%=Request.QueryString("currentURL")%>" />
						<div class="form">
							<div class="field <%loginForm.writeErrorClass(["username"])%>">
								<div class="indicator">
									<label for="username"><span class="required">*</span> Username <%loginForm.writeErrorSpan(["password"])%></label>
								</div>
								<div class="singleInput">
									<input type="text" class="text" name="username" id="username" value="<%=Request.Form("username")%>" />
								</div>
							</div>
							<div class="field <%loginForm.writeErrorClass(["password"])%>">
								<div class="indicator">
									<label for="password"><span class="required">*</span> Password <%loginForm.writeErrorSpan(["password"])%></label>
								</div>
								<div class="singleInput">
									<input type="password" class="text" name="password" id="password" value="<%=Request.Form("password")%>" />
								</div>
							</div>
							<div class="action">
								<input type="submit" class="submit" value="Login" name="loginSubmit" id="loginSubmit" />
							</div>
						</div>
					</form>
				<%} else {%>
					<div id="successMessage">
						<h2>You are successfully logged in.</h2>
					</div>
					
					<p>Please <a href="<%=Request.Form("URL")%>">carry on</a> to where you were going</p>
					
				<%}%>
			</div>
			<!--#include file="inc/footer.asp"-->
		</div>
		<!--#include file="inc/ga.asp"-->
	</body>
</html>