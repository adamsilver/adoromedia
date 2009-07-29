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
		<link rel="stylesheet" href="css/home.css" type="text/css" media="screen" />
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
					
					<h2>Introducing Adoro Media</h2>
					
					<p>Adoro Media are a collective of expert website designers and developers. We
					are a fresh thinking, highly energetic, digital agency, based in London. We are
					committed to reaching new heights, in the digital arena, by providing creative
					and innovative solutions that work.</p>
										
					<p>We have been established in the business for almost a decade and our passion
					for bespoke website design speaks for itself.</p>
					
					
					<h2>Our team, our approach</h2>
					<p>Our dynamic, engaging and vastly experienced team thrive on building strong
					client relationships, paying a very high level of attention to detail in each
					and every project. We go out of our way to deliver quality results but at a
					very affordable value. We are flexible in our approach so we can adapt to your
					unique requirements.</p>
							
				
				</div>
				<div id="secondary">
					<div id="secondaryNavigation">
						<ul>
							<li><a class="selected" href="about.php">About us</a></li>
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
