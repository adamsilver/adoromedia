<!DOCTYPE html>
<?php
	$metaKeywords = "adoro media, website design, website development, london";
	$metaDescription = "Adoro Media is a website design and development agency. Based in London.";
	$siteSection = "services";
?>
<html lang="en"> 
	<head>
		<title>Offices, St Andrews House, Solent Serviced Offices based in Gatwick</title> 
		<meta charset="utf-8" /> 
		<meta name="robots" content="all,index,follow" /> 
		<?php include("inc/globalJs.php"); ?>
		<?php include("inc/globalCss.php"); ?>
		<?php include("inc/globalCssIe.php"); ?>
	</head> 
	<body id="pgOffices">
		<div id="container">
			<div id="header">
				<?php include("inc/logo.php"); ?>
				<div id="testimonial">
					
					<p class="quote">
						<span>&#34;</span>Some sort of quote or one liner here, <br/>
						two lines is better than one i think...<span>&#34;</span>
					</p>
					<p class="person">Jo Bloggs, Service Co.</p>
				</div>
			</div>
			<?php include("inc/nav.php"); ?>
						
			<div id="content">
				<div id="breadcrumb">
					<p>You are viewing:</p>
					<ul>
						<li><a href="index.php">Home page</a></li>
						<li><a href="services.php">Services</a></li>
						<li>Offices</li>
					</ul>
				</div>
				
				<div id="primary">
					
					<div id="offices">
						<h1>The offices</h1>
						<ul class="generic">
							<li>Your clients are greeted by our dedicated staff at the reception and you are informed of their arrival.</li>
							<li>Email, word processing, facsimile and photocopying are chargeable services available - you only pay for what you use.</li>
							<li>The offices are freshly decorated, regularly cleaned and unfurnished - you decide the image you want.</li>
							<li>All offices have good natural light with all windows double glazed.</li>
							<li>There is ample free car parking with parking monitored on CCTV.</li>
							<li>The independent kitchen staff can provide sandwiches and buffet lunches to order.</li>
							<li>Council rates, heating and lighting costs are included - there are no hidden extras.</li>
						</ul>
					
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