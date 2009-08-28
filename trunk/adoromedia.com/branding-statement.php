<?php include("inc/doctype.php"); ?>
<?php include("inc/site.php"); ?>
<?php include("inc/Classes/BreadCrumbItem.php"); ?>
<?php include("inc/Classes/Rules.php"); ?>
<?php include("inc/Classes/FormValidator.php"); ?>
<?php
	$metaKeywords = "adoro media, website, web, bespoke, new, media, solutions, london, UK";
	$metaDescription = "Adoro Media is an agency dedicated to building new media solutions. Based in London, England.";
	$siteSection = "about";
	$breadcrumb = array(new BreadCrumbItem("index.php", "Home"), new BreadCrumbItem("about.php", "About"), new BreadCrumbItem(null, "Branding Statement"));
?>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	    <title>Branding statement, Expert website designers, Adoro Media, London, UK</title>
		<?php include("inc/headGlobal.php"); ?>
		<?php include("inc/headCSS.php"); ?>
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
						<h1>Branding statement</h1>
						
						<p>Adoro Media believes that at the heart of any good website is a good sense 
						of communication through design.  We pride ourselves not only on our technical 
						expertise but also on our creative know-how.</p>
						<p>We believe that by removing something from an equation, it is also possible 
						to add something.  The best ideas are almost always the simple ones.</p>
						<p>To demonstrate this, the Adoro brand logo was created using the Arial font.
						You will see how the "a" at the end of our name has been transformed by removing a 
						diagonal strip from the counter (the space within the character), into a paintbrush.</p>
						
					</div>
					<div id="secondary">
						<div id="secondaryNavigation">
							<ul>
								<li><a href="about.php">About us</a></li>
								<li><a href="team.php">Team</a></li>
								<li><a href="testimonials.php">Testimonials</a></li>
								<li><a class="selected" href="branding-statement.php">Branding statement</a></li>
								<!--<li><a href="faq.asp">FAQ</a></li>-->
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