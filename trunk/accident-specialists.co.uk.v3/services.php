<?php include("inc/doctype.php"); ?>
<?php include("inc/site.php"); ?>
<?php include("inc/Classes/Rules.php"); ?>
<?php include("inc/Classes/FormValidator.php"); ?>
<?php
	$metaKeywords = "hello there cowboy keywords";
	$metaDescription = "hello there cowboy";
	$siteSection = "services";
?>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	    <title>Services, The Accident Specialists, North West London</title>
		<?php include("inc/headGlobal.php"); ?>
		<?php include("inc/headCSS.php"); ?>
		<link rel="stylesheet" href="css/claim.css" type="text/css" media="screen" />
		<?php include("inc/headCSSIE.php"); ?>
		<?php include("inc/headJS.php"); ?>
	</head>
	<body id="pgServices" class="services">
		<div id="container">
			<?php include("inc/header.php"); ?>
			<?php include("inc/primaryNavigation.php"); ?>
			<div id="content">
								
				<div id="sections">
				
					<div id="primary">
						
						<h1>Our services</h1>
							
						<p>Some general stuff for Josh</p>
						
						<h2>Claims process</h2>
						
						<p>Some general stuff for Josh</p>

						<h2>Personal injury</h2>
						<p>Some general stuff for Josh</p>
						<!--
						<h2>No win no fee claim</h2>
						<p>Some general stuff for Josh</p>
						-->
						<h2>Other accident types</h2>
						<p>Some general stuff for Josh</p>

						
						
						
					</div>
					<div id="secondary">
						<div id="secondaryNavigation">
							<h2>Further information</h2>
							<ul>
								<li><a href="claims-process.php">Claim process</a></li>
								<li><a href="personal-injury-claims.php">Personal injury</a></li>
								<li><a href="other-accident-types.php">Other accident types</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<?php include("inc/footer.php"); ?>
		</div>
	</body>
</html>