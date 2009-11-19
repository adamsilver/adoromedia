<?php include("inc/doctype.php"); ?>
<?php include("inc/site.php"); ?>
<?php include("inc/Classes/BreadCrumbItem.php"); ?>
<?php include("inc/Classes/Rules.php"); ?>
<?php include("inc/Classes/FormValidator.php"); ?>
<?php
	$metaKeywords = "adoro media, website, web, bespoke, new, media, solutions, london, UK";
	$metaDescription = "Adoro Media is an agency dedicated to building new media solutions. Based in London, England.";
	$siteSection = "portfolio";
	$breadcrumb = array(new BreadCrumbItem("index.php", "Home"), new BreadCrumbItem(null, "Portfolio"));
?>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	    <title>Portfolio, Expert website designers, Adoro Media, London, UK</title>
		<?php include("inc/headGlobal.php"); ?>
		<?php include("inc/headCSS.php"); ?>
		<?php include("inc/headCSSIE.php"); ?>
		<?php include("inc/headJS.php"); ?>
	</head>
	<body id="pgPortfolio" class="portfolio">
		<div id="container">
			<div id="header">
				<?php include("inc/logo.php"); ?>
				<?php include("inc/primaryNavigation.php"); ?>
			</div>
			<div id="content">
				
				<?php include("inc/breadcrumb.php"); ?>
			
				<div id="sections">
					<div id="primary">
						<h1>Portfolio</h1>
						<p>Here is a selection of recent work. Just click the images to view the sites.</p>
						
						<ul class="portfolio">
							<li class="work">
								<h2><a href="http://www.lawrencecodling.com">Lawrence Codling, Graffiti Artist</a></h2>		
								<div class="image">
									<a href="http://www.lawrencecodling.com">
										<img src="img/portfolio/lcodling.jpg" alt="Lawrence Codling, Graffiti Artist" />
									</a>
								</div>
							</li>					
							<li class="work">
								<h2><a href="http://www.jsquaredjavascript.com">JSquared JavaScript Library</a></h2>		
								<div class="image">
									<a href="http://www.jsquaredjavascript.com">
										<img src="img/portfolio/jsquared.jpg" alt="JSquared JavaScript Library" />
									</a>
								</div>
							</li>	
							<li class="work">
								<h2><a href="http://www.dgretro.com">DG Retro Collectables</a></h2>
								<div class="image">
									<a href="http://www.dgretro.com">
										<img src="img/portfolio/dgretro.jpg" alt="DG Retro collectables" />
									</a>
								</div>
							</li>						
							<li class="work">
								<h2><a href="http://www.cp-plus.co.uk">CP Plus Car Park Management</a></h2>
								<div class="image">
									<a href="http://www.cp-plus.co.uk">
										<img src="img/portfolio/cpplus.jpg" alt="CP Plus" />
									</a>
								</div>
							</li>
							<li class="work">
								<h2><a href="http://www.jazzswingband.co.uk">The Mike Ellis Jazz &amp; Swing band</a></h2>
								<div class="image">
									<a href="http://www.jazzswingband.co.uk">
										<img src="img/portfolio/jazzswingband.jpg" alt="Jazz Swing Band" />
									</a>
								</div>
							</li>
							<li class="work">
								<h2><a href="http://www.pnp-decorations.co.uk">PnP Painters &amp; Decorators</a></h2>
								<div class="image">
									<a href="http://www.pnp-decorations.co.uk">
										<img src="img/portfolio/pnp.jpg" alt="PnP Decorations" />
									</a>
								</div>
							</li>
							<li class="work">
								<h2><a href="http://www.adlibprint.co.uk">Ad Lib Print and Design</a></h2>
								<div class="image">
									<a href="http://www.adlibprint.co.uk">
										<img src="img/portfolio/adlib.jpg" alt="Ad Lib Print and Design" />
									</a>
								</div>
							</li>	
							<li class="work">
								<h2><a href="http://www.capital-rentals.co.uk">Capital Rentals</a></h2>
								<div class="image">
									<a href="http://www.capital-rentals.co.uk">
										<img src="img/portfolio/capital.jpg" alt="Capital Rentals" />
									</a>
								</div>
							</li>
							<li class="work">
								<h2><a href="http://www.hartsbournecountryclub.co.uk">Hartsbourne Country Club</a></h2>
								<div class="image">
									<a href="http://www.hartsbournecountryclub.co.uk">
										<img src="img/portfolio/hartsbourne.jpg" alt="Hartsbourne Country Club" />
									</a>
								</div>
							</li>							
						</ul>
					</div>
				</div>
			</div>
			<?php include("inc/footer.php"); ?>
		</div>
		<?php include("inc/ga.php"); ?>
	</body>
</html>