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
						<li>Home page</li>
					</ul>
				</div>
				
				<div id="primary">
					
					<div id="homepage">
					
						<h1>Serviced offices based in Crawley</h1>
						
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at eros id metus
						luctus dignissim vitae id turpis. Donec nec quam nisl, bibendum auctor nibh. Curabitur
						in est ut orci tincidunt interdum. Pellentesque cursus congue massa, ac bibendum erat
						faucibus ut. Morbi eget ante enim.</p>
						
						<div class="heros">
							<a href="about.php">
								<div class="hero">
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
						
						<p>Aenean quis nibh ut leo hendrerit tempor. Integer purus justo, ullamcorper ac volutpat
						ultricies, pharetra ut sem.Quis mauris. In hac habitasse platea dictumst. Fusce non
						leo lectus, quis tincidunt nisl. Aliquam condimentum cursus lacus, eu consequat massa
						elementum at.</p>
						
						<p>Cras ornare pharetra tellus id imperdiet. Nullam at dui tortor. In mollis dui at mi
						posuere id tincidunt leo tempus. Proin metus augue, tincidunt nec sodales at, egestas a urna.</p>
						
					</div>
				</div>
				<div id="secondary">					
					<div id="homePageImage" class="photo">
						<img src="img/banner01.jpg" alt="" />
					</div>
					<div id="locations">
						<h2>Our serviced offices are located close to Gatwick Aiport</h2>
						<p>Some more seo text</p>
						<h2>Renting our serviced offices couldn't be easier</h2>
						<p>Some more text</p>
						<h2>Serviced offices in the heart of Crawley</h2>
						<p>Hire a serviced office now and receive 10% off for the first 3 months.</p>
					</div>
				</div>
			</div>
			<?php include("inc/footer.php"); ?>			
		</div>
	</body> 
</html>