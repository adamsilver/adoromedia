<!DOCTYPE html>
<?php
	$metaKeywords = "Serviced, Offices, Crawley, Gatwick, Area, Hire, Rent, St, Andrews, House";
	$metaDescription = "Serviced offices for hire, based in Crawley &amp; Gatwick, St Andrews House";
	$siteSection = "home";
?>
<html lang="en"> 
	<head>
		<title>Serviced offices based in Crawley &amp; Gatwick, St Andrews House</title> 
		<?php include("inc/headGlobal.php"); ?>
		<?php include("inc/globalCss.php"); ?>
		<?php include("inc/globalCssIe.php"); ?>
		<?php include("inc/globalJs.php"); ?>
		<script type="text/javascript" src="js/App/App.HomePageCycler.js"></script>
		<script type="text/javascript" src="js/App/App.Heroes.js"></script>
	</head> 
	<body id="pgHome">
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
						<li>Home page</li>
					</ul>
				</div>
				
				<div id="primary">
					
					<div id="homepage">
					
						<h1>St Andrews House - Serviced Offices in Crawley</h1>
						
						<h2><a href="contact.php#map">Our offices are located close to Gatwick Aiport</a></h2>
	
						
						<div class="heros">
							<a href="about.php">
								<div class="hero" id="heroAbout">
									<div class="textual">
										<h2>About us</h2>
										<p>Find out a little more about the company.</p>
									</div>
								</div>
							</a>
							<a href="services.php">
								<div class="hero" id="heroServices">
									<div class="textual">
										<h2>Services</h2>
										<p>Find out more about the services we provide.</p>
									</div>
								</div>
							</a>
							<a href="office-plans.php">
								<div class="hero" id="heroOffices">
									<div class="textual">
										<h2>Office plans</h2>
										<p>See the plans of the offices.</p>
									</div>
								</div>
							</a>
							<a href="contact.php">
								<div class="hero" id="heroFindUs">
									<div class="textual">
										<h2>Find us</h2>
										<p>Locate us using the interactive Google map.</p>
									</div>
								</div>
							</a>
						</div>
						
						<h2><a href="contact.php#enquiryForm">Renting our serviced offices couldn't be easier</a></h2>

					</div>
				</div>
				<div id="secondary">					
					<div id="homePageImage" class="photo">
						<img src="img/banner01.jpg" alt="" />
					</div>
				</div>
			</div>
			<?php include("inc/footer.php"); ?>			
		</div>
	</body> 
</html>