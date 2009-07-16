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
		<script src="http://maps.google.com/maps?file=api&amp;v=2&amp;key=ABQIAAAAnfs7bKE82qgb3Zc2YyS-oBT2yXp_ZAY8_ufC3CFXhHIE1NvwkxSySz_REpPq-4WZA27OwgbtyR3VcA" type="text/javascript"></script>		
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
							
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel lectus ligula, at gravida velit. 
						Sed massa sem, feugiat id lobortis sed, sodales a turpis. Donec eleifend tellus a nisl bibendum eget 
						malesuada nunc iaculis. Fusce facilisis, felis et euismod ullamcorper, nulla est sodales neque.</p>
						
						<div id="map">
							You must have JavaScript enabled to use Google Maps.
						</div>
						
					</div>
					<div id="secondary">
						
					</div>
				</div>
			</div>
			<?php include("inc/footer.php"); ?>
		</div>
	</body>
</html>