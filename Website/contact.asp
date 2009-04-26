<!--#include file="inc/doctype.asp"-->
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>
<!--#include file="inc/Adoro.asp"-->
<!--#include file="inc/Adoro.Forms.asp"-->
<!--#include file="inc/Adoro.Contact.asp"-->
<% Adoro.pageName = "contact"; %>
<% Adoro.siteSection = "adoro" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Contact Adoro, making websites adorable</title>
		<!--#include file="inc/head_other.asp"-->
		<meta name="keywords" content="contact, adoro media, adoro, email, website design." />
		<meta name="description" content="Adoro Media contact details. Email, phone or send a message." />			
		<link rel="stylesheet" href="<%=Adoro.URL%>css/site.css" type="text/css" />
		<!--#include file="inc/head_js.asp"-->
		<!--#include file="inc/head_css.asp"-->	
		<!--#include file="inc/head_cssie.asp"-->
	</head>
	<body id="pgContact">
		<div id="container">
			<div id="header">
				<!--#include file="inc/logo.asp"-->
				<!--#include file="inc/primaryNavigation.asp"-->
			</div>
			<div id="content">
					<%
						var breadCrumbParts = [Adoro.Breadcrumb.home,{
							text: "Contact"
						}];
					%>
					<!--#include file="inc/breadcrumb.asp"-->

					<div id="contactFormPanel">
					<h1>Contact details</h1>
					<% contactForm.showErrors(); %>
					<%if(messageSent == true) {%>
						<div id="successMessage">
							<h2>You have successfully sent a message to Adoro Media. Thank you.</h2>
						</div>
					<%}else { %>
						<%// contactForm.showErrors(); %>
						<form method="post" action="contact.asp" id="contactForm">
							
							<div class="field <%contactForm.writeErrorClass(["fullName"])%>">
								<div class="indicator">
									<label for="fullName"><span class="required">*</span> Full name <%contactForm.writeErrorSpan(["fullName"])%></label>
								</div>
								<div class="singleInput">
									<input type="text" id="fullName" name="fullName" value="<%=Request.Form("fullName")%>" class="text" />
								</div>
							</div>
							<div class="field <%contactForm.writeErrorClass(["email"])%>">
								<div class="indicator">
									<label for="email"><span class="required">*</span> Email <%contactForm.writeErrorSpan(["email"])%></label>
								</div>
								<div class="singleInput">
									<input type="text" id="email" name="email" value="<%=Request.Form("email")%>" class="text" />
								</div>
							</div>
						
							<div class="field <%contactForm.writeErrorClass(["message"])%>">
								<div class="indicator">
									<label for="message"><span class="required">*</span> Message <%contactForm.writeErrorSpan(["message"])%></label>
								</div>
								<div class="singleInput">
									<textarea id="message" name="message" cols="40" rows="8"><%=Request.Form("message")%></textarea>
								</div>
							</div>
							<div class="action">
								<input class="submit" type="submit" name="sendMessage" id="sendMessage" value="Send" />
							</div>
						</form>
					<%}%>
			</div>
			<!--#include file="inc/footer.asp"-->
		</div>
		<!--#include file="inc/ga.asp"-->
	</body>
</html>