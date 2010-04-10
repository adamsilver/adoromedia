<!DOCTYPE html>
<?php
	$metaKeywords = "Serviced, Offices, Crawley, Gatwick, Area, Hire, Rent, St, Andrews, House";
	$metaDescription = "Serviced offices for hire, based in Crawley &amp; Gatwick, St Andrews House";
	$siteSection = "services";
?>
<html lang="en"> 
	<head>
		<title>Office plans, Services, Serviced offices based in Crawley &amp; Gatwick, St Andrews House</title> 
		<?php include("inc/headGlobal.php"); ?>
		<?php include("inc/globalCss.php"); ?>
		<link rel="stylesheet" href="css/jquery.lightbox-0.5.css" type="text/css" media="screen" />
		<?php include("inc/globalCssIe.php"); ?>		
		<?php include("inc/globalJs.php"); ?>
		<script type="text/javascript" src="js/JQuery/jquery.lightbox-0.5.js"></script>
		<script type="text/javascript" src="js/App/App.PlanGallery.js"></script>
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
						<li>Office plans</li>
					</ul>
				</div>
				
				<div id="primary">
					<div id="officePlans">					
						<h1>Office plans</h1>						
						<p>	Scaled drawings of each floor, with room sizes, power point and
						low-energy light positions - we are dedicated to reducing our carbon
						footprint.</p>						
						<p>Please click on the plans below to zoom in.</p>						
						<div id="planGallery">
							<div class="item">
								<h2>Ground floor</h2>
								<a href="img/plan_ground_floor.gif" title="Ground floor"><img src="img/plan_ground_floor_thumb.gif" alt="" /></a>
							</div>
							<div class="item">
								<h2>First floor</h2>
								<a href="img/plan_first_floor.gif" title="First floor"><img src="img/plan_first_floor_thumb.gif" alt="" /></a>
							</div>
							<div class="item itemLast">
								<h2>Second floor</h2>
								<a href="img/plan_second_floor.gif" title="Second floor"><img src="img/plan_second_floor_thumb.gif" alt="" /></a>
							</div>
						</div>						
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