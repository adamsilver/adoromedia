<!DOCTYPE html>
<?php
	$metaKeywords = "Serviced, Offices, Crawley, Gatwick, Area, Hire, Rent, St, Andrews, House";
	$metaDescription = "Serviced offices for hire, based in Crawley &amp; Gatwick, St Andrews House";
	$siteSection = "services";
?>
<html lang="en"> 
	<head>
		<title>Services, Serviced offices based in Crawley &amp; Gatwick, St Andrews House</title> 
		<?php include("inc/headGlobal.php"); ?>
		<?php include("inc/globalCss.php"); ?>
		<?php include("inc/globalCssIe.php"); ?>
		<?php include("inc/globalJs.php"); ?>		
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
						<li>Services landing page</li>
					</ul>
				</div>				
				<div id="primary">					
					<div id="services">					
						<h1>Services</h1>				
						<p>Find out about the services we provide be following the links below:</p>						
						<ul class="generic">
						   <li><a href="offices.php">The offices</a></li>
						   <li><a href="office-plans.php">Plans</a></li>                    
						   <li><a href="virtual-offices.php">Virtual offices</a></li>
						   <li><a href="meeting-room.php">Meeting room</a></li>
						   <li><a href="security.php">Security</a></li>
						   <li><a href="telephones.php">Telephones</a></li>
						</ul>
						<h2>Hiring a serviced office is very easy</h2>
						<p>You can make an enquiry using our online <a href="contact.php#enquiryForm">enquiry form</a>.</p>						
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