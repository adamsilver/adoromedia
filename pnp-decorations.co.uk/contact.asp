<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>

<%
if (Request.Form("submit")=="Send") {
	var objCdoMail = Server.CreateObject("CDO.Message");
	objCdoMail.From = "info@pnp-decorations.co.uk";
	objCdoMail.To = "peter@pnp-decorations.co.uk, info@pnp-decorations.co.uk, k55adm@hotmail.com";
	objCdoMail.Subject = "Website: PnP Enquiry Form";
	objCdoMail.HTMLBody =
		"<h1>Website: PnP Enquiry Form</h1> " +
		"<p><strong>Name:</strong>" + Request.Form("name") + "</p> " +
		"<p><strong>Email:</strong>" + Request.Form("email") + "</p> " +
		"<p><strong>Details:</strong>" + Request.Form("details") + "</p> " +
		" ";
	objCdoMail.Send();
	var sent = true;
}
%>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>Contact Pnp Decorations: Professional painting, decorating, and wood furnishing in London, England, UK</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="shortcut icon" type="image/ico" href="../../favicon.ico" />
	<meta name="robots" content="all" />
	<meta name="description" content="Professional painting, decorating, and wood furnishing in London, England, UK" />
	<meta name="keywords" content="painting, wallpapering, floor sanding, restoration, decorating, woodcraft, london, england, uk" />
	<meta name="author" content="WebCreate3D" />
	<link rel="stylesheet" href="css/cssfix.css" type="text/css" media="all" />
	<style type="text/css" media="all">@import url("css/default.css");</style>
	<!--[if IE ]><link rel="stylesheet" href="css/ie.css" type="text/css" /><![endif]-->		
	<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
	<meta http-equiv="imagetoolbar" content="no" />
	<script language="javascript" src="inc/clilib.js" type="text/javascript"></script>
	<script language="javascript" type="text/javascript">
	<!--//
	function ValidateForm(form) {
		if (!CheckMandatory(form.name, "Please enter your name.")) return false;
		if (!CheckMandatory(form.email, "Please enter your email address.")) return false;
		if (!CheckEmail(form.email)) return false;
		if (!CheckMandatory(form.details, "Please enter details.")) return false;
		return true;
	}

	//-->
	</script>
</head>
<body id="contacton">
<div id="shading">
	<div id="container">
<!--#include file="inc/header.asp"-->
<!--#include file="inc/menu.asp"-->
		<div id="content">
			<div id="contact_sub">
				<h2>General Details</h2>
				<p><strong>Address</strong><br/>
				35 Scott Road Stevenage,<br/>
				Hertfordshire,<br/>
				SG2 0BZ
				</p>

				<p><strong>Telephone number</strong><br/>
				01438 722356
				</p>

				<p><strong>Mobile number</strong><br/>
				07956 355083
				</p>

				<p><strong>Email address</strong><br/>
				info@pnp-decorations.co.uk
				</p>
			</div>
			<div id="contact_main">
				<h2>Contact Form</h2>

<%				if (sent==true) { %>
					<p><strong>You have successfully sent the message to PnP Decorations</strong></p>
					<p>PnP will be in contact as soon as possible.</p>
<%				}
				else { %>
					<p>You can contact Pnp Decorations using the following form:</p>
					<form method="post" action="contact.asp" onsubmit="return ValidateForm(this)">
						<dl>
							<dt><label for="name">Your Name:</label> <em>*</em></dt>
							<dd><input class="normal" type="text" id="name" name="name" /></dd>
							<dt><label for="email">Your Email:</label> <em>*</em></dt>
							<dd><input class="normal" type="text" id="email" name="email" /></dd>
							<dt><label for="details">Comments:</label> <em>*</em></dt>
							<dd><textarea class="normal" id="details" name="details"></textarea></dd>
							<dt><input class="button" type="submit" name="submit" value="Send" /></dt>
						</dl>
					</form>
<%				} %>

			</div>
			<div id="clear">&nbsp;</div>
		</div>
<!--#include file="inc/footer.asp"-->
	</div>
</div>
</body>
</html>