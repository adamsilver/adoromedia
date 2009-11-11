<?php include("inc/doctype.php"); ?>
<?php include("inc/site.php"); ?>
<?php include("inc/Classes/BreadCrumbItem.php"); ?>
<?php include("inc/Classes/Rules.php"); ?>
<?php include("inc/Classes/FormValidator.php"); ?>
<?php
	$metaKeywords = "adoro media, website, web, bespoke, new, media, solutions, london, UK";
	$metaDescription = "Adoro Media is an agency dedicated to building new media solutions. Based in London, England.";
	$siteSection = "about";
	$breadcrumb = array(new BreadCrumbItem("index.php", "Home"), new BreadCrumbItem("about.php", "About"), new BreadCrumbItem(null, "Testimonials"));
?>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	    <title>Testimonials, Expert website designers, Adoro Media, London, UK</title>
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
						<h1>What our clients have to say</h1>
						<div class="testimonials">
							<div class="testimonial">
								<h3>Grahame Rose:  CP Plus</h3>
								<p>As  Business Development Director for CP Plus it was my responsibility to redevelop the existing website 
								for search visibility, and user-friendly design purposes. After looking at a wide range of designers, we decided 
								to go with Adoro Media because they really seemed to understand the brief and what we were looking for;  we have 
								not been disappointed. Working with Adoro Media has been  speedy and efficient and altogether a great experience. 
								Adam Silver has made the process very easy and I continue to liase with Adoro Media for updates and website 
								maintenance.  The website was delivered on schedule and within an extremely cost effective budget. In short, I 
								would highly recommend Adoro's services to any business looking to maximise their presence on the web with a 
								modern, web standards compliant best-of-breed website.</p>
								<p>Website:  <a href="http://www.cp-plus.co.uk">http://www.cp-plus.co.uk</a> </p>
							</div>
							<div class="testimonial">
								<h3>Peter Perry:  PnP Decorations</h3>
								<p>We contacted Adoro media to work on our website because we liked their designs and they came highly recommended. 
								We were looking for something different, stylish and clean. Adam helped us understand our business from a clients 
								point of view which enabled us to create an easy to use holistic website. We are very happy with the design but 
								also very happy with our index in Google search engine.  Highly recommended to any business looking to gain that 
								special edge via their website.</p>
								<p>Website:  <a href="http://www.pnp-decorations.co.uk">http://www.pnp-decorations.co.uk</a></p>
							</div>
							<div class="testimonial testimonialLast">
								<h3>Lawrence Codling: Artist</h3>
								<p>Adoro Media was recommended to me when I was looking for someone to turn my designs into a viable, working website. 
								I am a graphic designer by trade and had no trouble in actually creating the look, feel and branding of my site. Once 
								I had achieved this I handed the designs over to Adam at Adoro Media.</p>
								<p>Although the site is relatively small I was still extremely impressed with the turnaround time of the work undertaken by Adoro. 
								The site boasts full cross-browser compatibility and has been built to my exact specifications. I have even been set up with a Google 
								Analytics account which helps me monitor traffic to my site and study current trends. Adoro Media have helped me realise my media potential 
								and have done it all in a thoroughly professional matter, without losing sight of what it actually was that I wanted. Very well done.</p>
								<p>Website:  <a href="http://www.lawrencecodling.com">http://www.lawrencecodling.com</a></p>
							</div>			       
						</div>
					</div>
					<div id="secondary">
						<div id="secondaryNavigation">
							<ul>
								<li><a href="about.php">About us</a></li>
								<li><a href="team.php">Team</a></li>
								<li><a class="selected" href="testimonials.php">Testimonials</a></li>
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