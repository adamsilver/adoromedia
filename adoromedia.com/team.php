<?php include("inc/doctype.php"); ?>
<?php include("inc/site.php"); ?>
<?php include("inc/Classes/BreadCrumbItem.php"); ?>
<?php include("inc/Classes/Rules.php"); ?>
<?php include("inc/Classes/FormValidator.php"); ?>
<?php
	$metaKeywords = "adoro media, website, web, bespoke, new, media, solutions, london, UK";
	$metaDescription = "Adoro Media is an agency dedicated to building new media solutions. Based in London, England.";
	$siteSection = "about";
	$breadcrumb = array(new BreadCrumbItem("index.php", "Home"), new BreadCrumbItem("about.php", "About"), new BreadCrumbItem(null, "Team"));
?>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	    <title>Team, Expert website designers, Adoro Media, London, UK</title>
		<?php include("inc/headGlobal.php"); ?>
		<?php include("inc/headCSS.php"); ?>
		<?php include("inc/headCSSIE.php"); ?>
		<?php include("inc/headJS.php"); ?>
	</head>
	<body id="pgTeam" class="about">
		<div id="container">
			<div id="header">
				<?php include("inc/logo.php"); ?>
				<?php include("inc/primaryNavigation.php"); ?>
			</div>
			<div id="content">
				
				<?php include("inc/breadcrumb.php"); ?>
			
				<div id="sections">
					<div id="primary">
					<h1>Meet the team</h1>
					
					<div id="members">
						<div class="member">
							<h2 class="position">Adam, Director &amp; Lead front-end developer</h2>
							<div class="description">
								<img src="" alt="Adam" />
								<p>Adam is the Director of Adoro Media, a web 
								design studio focussing on elegance, accessibility and user 
								experience design. Adam has been developing successful 
								websites since 2000; he is an advocate of web standards, 
								has an obsession with detail and a passion for all things 
								web design.</p>
							</div>
						</div>
						<div class="member">
							<h2 class="position">Steve, Django developer</h2>
							<div class="description">
								<img src="" alt="Steve" />
								<p>Steve is the Django man.</p>
							</div>
						</div>						
					</div>
							
				
				</div>
				<div id="secondary">
					<div id="secondaryNavigation">
						<ul>
							<li><a href="about.php">About us</a></li>
							<li><a class="selected" href="team.php">Team</a></li>
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
