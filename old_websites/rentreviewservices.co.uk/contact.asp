<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<%@ language="JavaScript"%>
<%Response.Expires=-1441%>
<%Response.Buffer=true%>

<%
if (Request.Form("submit")=="Send") {
	var msg =
		"<h1>Rent Review Services Contact Form</h1> " +
		"<p><strong>Name:</strong>" + Request.Form("name") + "</p> " +
		"<p><strong>Email:</strong>" + Request.Form("email") + "</p> " +
		"<p><strong>Telephone:</strong>" + Request.Form("tel") + "</p> " +
		"<p><strong>Comments:</strong>" + Request.Form("comments") + "</p>";
	var objCdoMail = Server.CreateObject("CDO.Message");
	objCdoMail.From = "info@rentreviewservices.co.uk";
	objCdoMail.To = "info@rentreviewservices.co.uk";
	objCdoMail.Subject = "Website: WebCreate3D Contact Form";
	objCdoMail.HTMLBody = "" + msg;
	objCdoMail.Send();
	var sent = true;
}
%>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-GB" lang="en-GB" dir="ltr">
<head>
<title>Rent Review Services in London UK, Woolfe and Co Surveyors - Rent review for shops, offices, restaurants and industrial premises.</title>
<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
<meta name="keywords" content="Rent, Review, Services, Surveyors, London, England, UK" />
<meta name="description" content="A professional rent review service for shops, offices, restaurants, and industrial premises in the Greater London area" />
<meta name="author" content="WebCreate3D" />
<meta name="copyright" content="Rent Review Services" />
<meta http-equiv="imagetoolbar" content="no" />
<meta name="robots" content="all,index,follow" />
<script type="text/javascript" src="js/highlightinput.js"></script>
<script src="http://maps.google.com/maps?file=api&amp;v=2&amp;key=ABQIAAAA50W4UItchkkIHrEcgroc8xSJVNfpYyRRydAeuiyBeaUVMRfozhTHAZRXJ9KbXWIMokltZTusXIMwHA" type="text/javascript"></script>
<script src="js/gmap.js" type="text/javascript"></script>
<link rel="stylesheet" href="css/default.css" type="text/css" />
<!--[if IE 6]><link rel="stylesheet" href="css/ie6-patch.css" type="text/css" /><![endif]-->
</head>
<body id="contacton">
	<div id="container">
		<div id="sideA">
<!--#include file="inc/nav.asp"-->
			<div id="content">
				<h1>Contact Rent Review Services</h1>
				<h2>Our contact details</h2>

				<p><strong>Michael Woolfe or Clive Woolfe FRICS</strong><br/>
				Shakespeare House,<br/>
				Dollis Park,<br/>
				London<br/>
				N3 1HH</p>
			
				<p><strong>Tel:</strong> 0208 349 0101</p>
				<p><strong>Fax:</strong> 0208 349 0107</p>
				<p><strong>Email:</strong> info@rentreviewservices.co.uk</p>
				
				<h2>How to find us</h2>
				<p>Use your mouse to move the map, click on the controls to zoom in and out.</p>
								
				<div id="map">
					Google Map loading... 
					<a href="contact.asp">Refresh map</a>
				</div>
			</div>
<!--#include file="inc/footer.asp"-->
		</div>
		<div id="sideB">
			<a id="logo" href="default.asp" title="Rent Review Services: Home Page">Rent Review Services: Home Page</a>
			<div id="subContent">
				<h2>Contact form</h2>
				
<%			if (sent==true) { %>
					<p><strong>Thank you...message sent.</strong></p>
					<p>We will reply as soon as possible.</p>
<%			}
				else { %>				
					<form id="contactform" method="post" action="contact.asp">
						<label for="name">Contact name:</label>
						<input class="input" type="text" name="name" id="name" />
						<label for="email">Your email address:</label>
						<input class="input" type="text" name="email" id="email" />
						<label for="tel">Your telephone number:</label>
						<input class="input" type="text" name="tel" id="tel" />
						<label for="textarea-quote">Comments/Questions/Feedback:</label>
						<textarea cols="19" rows="10" id="textarea-quote" class="textarea-quote" name="comments"></textarea>
						<input class="button" type="submit" name="submit" value="Send" />
					</form>
<%			} %>					
				
			</div>
		</div>
	</div>
<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-7549895-2");
pageTracker._trackPageview();
} catch(err) {}</script>
</body>
</html>
