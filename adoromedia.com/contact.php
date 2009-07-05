<?php include("inc/doctype.php"); ?>
<?php include("inc/site.php"); ?>
<?php include("inc/Classes/BreadCrumbItem.php"); ?>
<?php include("inc/Classes/Rules.php"); ?>
<?php include("inc/Classes/FormValidator.php"); ?>
<?php
	$metaKeywords = "hello there cowboy keywords";
	$metaDescription = "hello there cowboy";
	$siteSection = "contact";
	$breadcrumb = array(new BreadCrumbItem("index.php", "Home"), new BreadCrumbItem(null, "Contact"));
?>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	    <title>Contact, Expert website designers, Adoro Media, London, UK</title>
		<?php include("inc/headGlobal.php"); ?>
		<?php include("inc/headCSS.php"); ?>
		<link rel="stylesheet" href="css/home.css" type="text/css" media="screen" />
		<?php include("inc/headCSSIE.php"); ?>
		<?php include("inc/headJS.php"); ?>
	</head>
	<body id="pgContact" class="contact">
		<div id="container">
			<div id="header">
				<?php include("inc/logo.php"); ?>
				<?php include("inc/primaryNavigation.php"); ?>
			</div>
			<div id="content">
				
				<?php include("inc/breadcrumb.php"); ?>
			
				<div id="sections">
					<div id="primary">
						<div id="contactFormPanel">
							<h1>Contact details</h1>
							<p>We want to work with you to produce a better website.</p>
							
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
					</div>
					<div id="secondary">
						<h2>Alternatively</h2>
						<p>Tel: +44 (0) 771 349 0316</p>
						<p>Email: info@adoromedia.com</p>
					</div>
				</div>
			</div>
			<?php include("inc/footer.php"); ?>
		</div>
		<!--#include file="inc/ga.asp"-->
	</body>
</html>