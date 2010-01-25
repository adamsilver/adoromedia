<?php include("inc/doctype.php"); ?>
<?php include("inc/site.php"); ?>
<?php
	$metaKeywords = "adoro media, website design, website development, london";
	$metaDescription = "Adoro Media is a website design and development agency. Based in London.";
	$siteSection = "home";
?>
<html lang="en">
	<head>
	    <title>Adoro Media - Website design &amp; development agency - London</title>
		<?php include("inc/headGlobal.php"); ?>
		<?php include("inc/headCSS.php"); ?>
		<?php include("inc/headCSSIE.php"); ?>
		<?php include("inc/headJS.php"); ?>
		<script type="text/javascript" src="js/Site/Home/Site.Home.FeaturedWork.js"></script>
	</head>
	<body id="pgHome">
		<div id="container">
			<div id="header">
				<?php include("inc/logo.php"); ?>
				
			</div>
			<?php include("inc/primaryNavigation.php"); ?>
			<div id="slogan">
				<p>Helping <em>people</em> &amp; companies build better websites.</p>
			</div>
			<div id="content">
				<div class="primary">
					<h1>Website design &amp; development agency - London</h1>
					
					<h2>Testimonial</h2>
					<p>"As Business Development Director for CP Plus, it was my responsibility to redevelop 
					the existing website for search visibility and user-friendly design purposes. After looking 
					at a wide range of designers, we decided to go with Adoro Media because they really understood 
					the brief and what we were looking for; we have not been disappointed. Working with Adoro Media 
					has been speedy and efficient and altogether a great experience. Adam Silver has made the process 
					very easy and I continue to liaise with Adoro Media for updates and website maintenance. The website 
					was delivered on schedule and within an extremely cost effective budget. In short, I would highly 
					recommend Adoro's services to any business looking to maximise their presence on the web with a modern, 
					web-standards compliant best-of-breed website."</p>
					<p>Grahame Rose: CP Plus</p>
					<p><a href="http://www.cp-plus.co.uk">Launch website</a></p>
				</div>
				
				<div class="secondary">
					<div class="featuredWork">
						<h2>Featured work <span> / from our portfolio</span></h2>
						
						<div class="image">
							<div class="clip">
								<ul class="pages">
									<li class="page">
										<img width="600" height="349" src="img/featured/hb1.jpg" alt="Hartsbourne Country Club"/>
									</li>
									<li class="page">
										<img width="600" height="349" src="img/featured/hb2.jpg" alt="Hartsbourne Country Club"/>
									</li>
									<li class="page">
										<img width="600" height="349" src="img/featured/hb3.jpg" alt="Hartsbourne Country Club"/>
									</li>
								</ul>
							</div>
						</div>
						
						<p>Hartsbourne Country Club recently launched in October 2009</p>
					</div>
				</div>				
				
			</div>
			<?php include("inc/footer.php"); ?>
			<?php include("inc/ga.php"); ?>
		</div>
	</body>
</html>