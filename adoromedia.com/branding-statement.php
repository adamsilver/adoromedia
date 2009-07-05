<?php include("inc/doctype.php"); ?>
<?php include("inc/site.php"); ?>
<?php include("inc/Classes/BreadCrumbItem.php"); ?>
<?php include("inc/Classes/Rules.php"); ?>
<?php include("inc/Classes/FormValidator.php"); ?>
<?php
	$metaKeywords = "hello there cowboy keywords";
	$metaDescription = "hello there cowboy";
	$siteSection = "about";
	$breadcrumb = array(new BreadCrumbItem("index.php", "Home"), new BreadCrumbItem("about.php", "About"), new BreadCrumbItem(null, "Branding Statement"));
?>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	    <title>Branding statement, Expert website designers, Adoro Media, London, UK</title>
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
						<h1>Branding statement</h1>
						
						<p>The Arial font was used to create the Adoro brand as a celebration of its cross 
						browser compatibility. In this industry we rely heavily on things being able to work 
						cross-platform; Arial is the industry standard font for use with dynamic text. Adoro 
						Media has always practiced and promoted the notion of cross browser usability and is 
						proud to use Arial font in its branding.</p>
						<p>The 'a' character at the end of our name has been used to create our Adoro Media 
						logo. If you look closely, you can see that the counter (the partially or fully 
						enclosed space within the character) has had a diagonal strip removed from it, 
						which has transformed the shape into that of a paintbrush.</p>
						<p>This has been done to promote two ideas that Adoro Media hold dear: </p>
						
						<ol>
							<li>Firstly that at the heart of any good website is a good sense of communication 
							through design. At Adoro we pride ourselves not only on our technical expertise but 
							also on our creative know-how.</li>
							<li>Secondly we believe that by removing something from an equation it is also 
							possible to add something. The best ideas are nearly always the simple ones.</li>
						</ol>
						
					</div>
					<div id="secondary">
						<div id="secondaryNavigation">
							<ul>
								<li><a href="about.asp">About us</a></li>
								<li><a class="selected" href="branding-statement.asp">Branding statement</a></li>
								<!--<li><a href="faq.asp">FAQ</a></li>-->
							</ul>
						</div>
					</div>
				</div>
			</div>
			<?php include("inc/footer.php"); ?>
		</div>
		<!--#include file="inc/ga.asp"-->
	</body>
</html>