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
		<title>Contact, Bespoke new media solutions, Adoro Media Ltd</title>
		<!--#include file="inc/head_other.asp"-->	
		<!--#include file="inc/head_js.asp"-->
		<script type="text/javascript" src="js/Adoro/Adoro.FormValidator.js"></script>
		<script type="text/javascript" src="js/Adoro/Adoro.FormRules.js"></script>
		<script type="text/javascript" src="js/Adoro/Adoro.ContactForm.js"></script>	
		<script type="text/javascript" src="js/Adoro/Adoro.FieldHighlight.js"></script>
		<!--#include file="inc/head_css.asp"-->	
		<!--#include file="inc/head_cssie.asp"-->
	</head>
	<body>
		<div id="container">
			<div class="faux">
				<div id="controls">
					<!--#include file="inc/logo.asp"-->
					<!--#include file="inc/primaryNavigation.asp"-->
				</div>
				<div id="content">
					<h1>Contact details</h1>
					<p>If you would like to get in touch for more information or a quote,
					please use one of the methods below.</p>
					<h2>Form</h2>				
					
					<% contactForm.showErrors(); %>
					<%if(messageSent == true) {%>
						<div id="successMessage">
							<h3>You have successfully sent a message to Adoro Media. Thank you.</h3>
						</div>
					<%}else { %>
						<%// contactForm.showErrors(); %>
						<form method="post" action="contact.asp" id="contactForm">
							<div class="form">
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
							</div>
						</form>
					<%}%>
					<h2>Telephone</h2>
					<p>07713 490 316</p>
					<h2>Email address</h2>
					<p>info@adoromedia.com</p>
				</div>
			</div>
		</div>
		<!--#include file="inc/footer.asp"-->
		<!--#include file="inc/ga.asp"-->
	</body>
</html>