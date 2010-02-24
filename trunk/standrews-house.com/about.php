<!DOCTYPE html>
<?php
	$metaKeywords = "adoro media, website design, website development, london";
	$metaDescription = "Adoro Media is a website design and development agency. Based in London.";
	$siteSection = "about";
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
						<li>About</li>
					</ul>
				</div>
				
				<div id="primary">
					
					<div id="homepage">
					
						<h1>About St Andrews House</h1>
						
						<p>St Andrews House is an integral part of the Solent Serviced Offices
						Ltd group of bespoke offices, an Edwardian Character  building, in a
						conservation area, dedicated to providing a friendly and efficient work
						place for the discerning client.</p>
						
						<h2>Family run business</h2>
						
						<p>It is a place open for business 24 hours a day, 365 days a year, part
						of a family-run company since 1978 and staffed by enthusiastic people, who
						will assist in the day to day running of the businesses within.</p>
						
						<p>Find out more in the <a href="services.php">services</a> section of our website.</p>
					</div>
				</div>
				<div id="secondary">
					<div class="photo">
						<img src="img/banner01.jpg" alt="" />
					</div>
				</div>
			</div>
			<?php include("inc/footer.php"); ?>			
		</div>
	</body> 
</html>