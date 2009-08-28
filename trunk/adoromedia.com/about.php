<?php include("inc/doctype.php"); ?>
<?php include("inc/site.php"); ?>
<?php include("inc/Classes/BreadCrumbItem.php"); ?>
<?php include("inc/Classes/Rules.php"); ?>
<?php include("inc/Classes/FormValidator.php"); ?>
<?php
	$metaKeywords = "adoro media, website, web, bespoke, new, media, solutions, london, UK";
	$metaDescription = "Adoro Media is an agency dedicated to building new media solutions. Based in London, England.";
	$siteSection = "about";
	$breadcrumb = array(new BreadCrumbItem("index.php", "Home"), new BreadCrumbItem(null, "About"));
?>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	    <title>About, Expert website designers, Adoro Media, London, UK</title>
		<?php include("inc/headGlobal.php"); ?>
		<?php include("inc/headCSS.php"); ?>
		<?php include("inc/headCSSIE.php"); ?>
		<?php include("inc/headJS.php"); ?>
	</head>
	<body id="pgAbout" class="about">
		<div id="container">
			<div id="header">
				<?php include("inc/logo.php"); ?>
				<?php include("inc/primaryNavigation.php"); ?>
			</div>
			<div id="content">
				
				<?php include("inc/breadcrumb.php"); ?>
			
				<div id="sections">
					<div id="primary">
					<h1>About us</h1>
										
					<p>Adoro Media is a digital agency, based in London and Hertfordshire, 
					established in 2000 which is committed to reaching new heights in the 
					digital arena by providing creative and innovative solutions to meet all 
					your website needs.</p>
					
					<p>We will build bespoke websites to meet your specification, 
					from e-commerce to small brochure websites and beyond in order to provide your 
					audience with a great online experience.</p>
					
					<p>Our team of expert website designers and developers is fresh thinking, 
					highly energetic and talented.  We are dynamic, engaging and vastly experienced, 
					and thrive on building strong client relationships, whilst remaining flexible in 
					our approach and paying a very high level of attention to detail in each project.  
					We are passionate about delivering quality results at affordable prices.</p>	
				
				</div>
				<div id="secondary">
					<div id="secondaryNavigation">
						<ul>
							<li><a class="selected" href="about.php">About us</a></li>
							<li><a href="team.php">Team</a></li>
							<li><a href="testimonials.php">Testimonials</a></li>
							<li><a href="branding-statement.php">Branding statement</a></li>
						</ul>
					</div>
				</div>
				</div>
			</div>
			<?php include("inc/footer.php"); ?>
		</div>
		<?php include("inc/ga.php"); ?>
	</body>
</html>

<!--
Project process

1.  Initial meeting
2.  Project proposal with pricing
3.  Kick off meeting
4.  Design phase with iterations
5.  Application build
6.  Design integration
7.  Testing
8.  Launch
9.  Training

* need to add where we remove other hosting if needed and email setup etc
* in each stage go into detail of being provided copy etc etc
-->
