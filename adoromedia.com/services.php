<?php include("inc/doctype.php"); ?>
<?php include("inc/site.php"); ?>
<?php include("inc/Classes/BreadCrumbItem.php"); ?>
<?php include("inc/Classes/Rules.php"); ?>
<?php include("inc/Classes/FormValidator.php"); ?>
<?php
	$metaKeywords = "adoro media, website, web, bespoke, new, media, solutions, london, UK";
	$metaDescription = "Adoro Media is an agency dedicated to building new media solutions. Based in London, England.";
	$siteSection = "services";
	$breadcrumb = array(new BreadCrumbItem("index.php", "Home"), new BreadCrumbItem(null, "Services"));
?>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	    <title>Services, Expert website designers, Adoro Media, London, UK</title>
		<?php include("inc/headGlobal.php"); ?>
		<?php include("inc/headCSS.php"); ?>
		<link rel="stylesheet" href="css/home.css" type="text/css" media="screen" />
		<?php include("inc/headCSSIE.php"); ?>
		<?php include("inc/headJS.php"); ?>
	</head>
	<body id="pgHomePage" class="about">
		<div id="container">
			<div id="header">
				<?php include("inc/logo.php"); ?>
				<?php include("inc/primaryNavigation.php"); ?>
			</div>
			<div id="content">
				
				<?php include("inc/breadcrumb.php"); ?>
			
				<div id="sections">
					<div id="primary">
						<h1>Website design services</h1>
						<p>We provide a wide range of services in website design and development.</p>
						<ul>
							<li>Start-up sites and business site solutions</li>
							<li>Hand coded <abbr title="eXtensible HyperText Markup Language">XHTML</abbr> / <abbr title="Cascading Style Sheets">CSS</abbr> bespoke design</li>
							<li>Easy to use content management systems</li>
							<li>Database driven facilities</li>
							<li>E-commerce, shopping cart applications</li>
							<li>Information guidance and structure</li>
							<li>Website usability advice and consultation</li>
							<li>Domain name registration, hosting and support</li>
							<li>Audio/Video: <abbr title="Moving Picture Experts Group 3">MP3</abbr>, Real Audio, <abbr title="Moving Picture Experts Group">MPEG</abbr> etc</li>
							<li>Flash animation</li>
							<li>Search-engine optimisation and promotion</li>
							<li>Ongoing support and maintenance</li>
							<li>Accessibility</li>
							<li>Branding and logo design</li>
							<li>Marketing</li>
							<li>Advertising and email campaigns</li>
							<li>Online innovations</li>
							<li><abbr title="Compact Disk">CD</abbr>/<abbr title="Digital Video Disc">DVD</abbr> authoring</li>
							<li>Presentations</li>
							<li>Print</li>
						</ul>
					</div>
					<div id="secondary">
						<div id="secondaryNavigation">
							<ul>
								<li><a class="selected" href="services.php">Services</a></li>
								<!--<li><a href="user-interface-design.asp">User interface design</a></li>
								<li><a href="organic-seo.asp">Organic SEO</a></li>-->
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