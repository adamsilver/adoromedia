<?php include("inc/doctype.php"); ?>
<?php include("inc/site.php"); ?>
<?php include("inc/Classes/Rules.php"); ?>
<?php include("inc/Classes/FormValidator.php"); ?>
<?php
	$metaKeywords = "hello there cowboy keywords";
	$metaDescription = "hello there cowboy";
	$siteSection = "contact";
?>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	    <title>Contact details, The Accident Specialists, North West London</title>
		<?php include("inc/headGlobal.php"); ?>
		<?php include("inc/headCSS.php"); ?>
		<link rel="stylesheet" href="css/contact.css" type="text/css" media="screen" />
		<?php include("inc/headCSSIE.php"); ?>
		<?php include("inc/headJS.php"); ?>
		<!--<script src="http://maps.google.com/maps?file=api&amp;v=2&amp;key=ABQIAAAAnfs7bKE82qgb3Zc2YyS-oBT2yXp_ZAY8_ufC3CFXhHIE1NvwkxSySz_REpPq-4WZA27OwgbtyR3VcA" type="text/javascript"></script>-->
		<script src="http://maps.google.com/maps?file=api&amp;v=2&amp;key=ABQIAAAAcCPnNaC9ucSS0iuyWMhdNhQI_FobhqIvTy25MxX7jU__QO27GRRGc7BHV1em9YpTvVi-L8cZrwxg9g" type="text/javascript"></script>		
		
		<script type="text/javascript" src="js/Adoro/Adoro.GoogleMap.js"></script>
		<script type="text/javascript" src="js/Site/Contact/Site.Contact.GoogleMap.js"></script>
	</head>
	<body id="pgContact" class="contact">
		<div id="container">
			<?php include("inc/header.php"); ?>
			<?php include("inc/primaryNavigation.php"); ?>
			<div id="content">
								
				<div id="sections">
				
					<div id="primary">
						
						<h1>Contact details</h1>
							
						<p>You can contact us anytime between 8am-8pm, Monday to Saturday to talk to a specialist advisor.
						If you phone us at any other time, you will be able to leave a message for one of our accident specialists
						to call you back at a convenient time.</p>
						
						<div id="map">
							You must have JavaScript enabled to use Google Maps.
						</div>
						
					</div>
					<div id="secondary">
						<h2>Address</h2>
						<p>1C Market Place, Hampstead Garden Suburb, NW11 6LB</p>
						
						<h2>Telephone</h2>
						<p>020 8455 4199</p>
						
						<h2>Fax</h2>
						<p>0208 455 9888</p>
						
						<h2>Email</h2>
						<p><a href="mailto: enquiries@accident-specialists.co.uk">enquiries@accident-specialists.co.uk</a></p>
					</div>
				</div>
			</div>
			<?php include("inc/footer.php"); ?>
		</div>
	</body>
</html>