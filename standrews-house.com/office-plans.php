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
		<script type="text/javascript" src="js/JQuery/jquery.lightbox-0.5.js"></script>
		<script type="text/javascript" src="js/App/App.PlanGallery.js"></script>
		<?php include("inc/globalCss.php"); ?>
		<link rel="stylesheet" href="css/jquery.lightbox-0.5.css" type="text/css" media="screen" />
		<?php include("inc/globalCssIe.php"); ?>
	</head> 
	<body>
		<div id="container">
			<div id="header">
				<?php include("inc/logo.php"); ?>
				<div id="testimonial">
					
					<p class="quote">
						<span>&#34;</span>Some sort of quote or one liner here, <br/>
						two lines is better than one i think...<span>&#34;</span>
					</p>
					<p class="person">Jo Bloggs, Service Co.</p>
				</div>
			</div>
			<?php include("inc/nav.php"); ?>
						
			<div id="content">
				<div id="breadcrumb">
					<p>You are viewing:</p>
					<ul>
						<li><a href="index.php">Home page</a></li>
						<li><a href="services.php">Services</a></li>
						<li>Plans</li>
					</ul>
				</div>
				
				<div id="primary">
					
					<div id="homepage">
					
						<h1>Office plans</h1>
						
						<p>See scaled drawings which show each floor of the building,
						with room sizes, power point and low-energy light positions -
						we are dedicated to reducing our carbon footprint.</p>
						
						
						<div id="planGallery">
							<div class="item">
								<h2>Ground floor</h2>
								<a href="img/plan_ground_floor.gif" title="Ground floor"><img src="img/plan_ground_floor_thumb.gif" alt="" /></a>
							</div>
							<div class="item">
								<h2>First floor</h2>
								<a href="img/plan_first_floor.gif" title="First floor"><img src="img/plan_first_floor_thumb.gif" alt="" /></a>
							</div>
							<div class="item">
								<h2>Second floor</h2>
								<a href="img/plan_second_floor.gif" title="Second floor"><img src="img/plan_second_floor_thumb.gif" alt="" /></a>
							</div>
						</div>
						
					</div>
				</div>
				<div id="secondary">
					
				</div>
			</div>
			<?php include("inc/footer.php"); ?>			
		</div>
	</body> 
</html>