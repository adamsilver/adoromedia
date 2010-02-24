<!DOCTYPE html>
<?php
	$metaKeywords = "adoro media, website design, website development, london";
	$metaDescription = "Adoro Media is a website design and development agency. Based in London.";
	$siteSection = "services";
?>
<html lang="en"> 
	<head>
		<title>Solent Serviced Offices: St Andrews House</title> 
		<meta charset="utf-8" /> 
		<meta name="robots" content="all,index,follow" /> 
		<?php include("inc/globalJs.php"); ?>
		<?php include("inc/globalCss.php"); ?>
		<?php include("inc/globalCssIe.php"); ?>
	</head> 
	<body>
		<div id="container">
			<div id="header">
				<?php include("inc/logo.php"); ?>
				<?php include("inc/testimonial.php"); ?>
			</div>
			<?php include("inc/nav.php"); ?>						
			<div id="content">
				<div id="breadcrumb">
					<p>You are viewing:</p>
					<ul>
						<li><a href="index.php">Home page</a></li>
						<li><a href="services.php">Services</a></li>
						<li>Telephones</li>
					</ul>
				</div>				
				<div id="primary">					
					<div id="telephones">					
						<h1>Telephones</h1>						
						<ul class="generic">
							<li>The building is pre-wired with a Meridian Nortsar system.</li>
							<li>Each office has numerous telephone points, linked to the main switchboard.</li>
							<li>BT and Virgin networks are immediately available.</li>
							<li>The system includes voice mail recording.</li>
							<li>You decide whether you wish for us to answer your telephone calls/take messages in your company name, (through our system and chargeable) or you receive your calls direct (no voice mail facility but no charges).</li>
						</ul>						
					</div>
				</div>
				<div id="secondary">
					<div class="photo">
						<img src="img/banner04.jpg" alt="" />
					</div>
				</div>
			</div>
			<?php include("inc/footer.php"); ?>			
		</div>
	</body> 
</html>