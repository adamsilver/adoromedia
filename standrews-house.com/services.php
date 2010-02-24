<!DOCTYPE html>
<?php
	$metaKeywords = "adoro media, website design, website development, london";
	$metaDescription = "Adoro Media is a website design and development agency. Based in London.";
	$siteSection = "services";
?>
<html lang="en"> 
	<head>
		<title>Solent Serviced Offices: St Andrews House</title> 
		<meta charset="utf-8" /> 
		<meta name="robots" content="all,index,follow" /> 
		<?php include("inc/globalJs.php"); ?>
		<?php include("inc/globalCss.php"); ?>
		<?php include("inc/globalCssIe.php"); ?>
	</head> 
	<body>
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
						<li>Services landing page</li>
					</ul>
				</div>
				
				<div id="primary">
					
					<div id="homepage">
					
						<h1>Services</h1>
						
						<p>Find out about the services we provide be following the links below:</p>
						
						 <ul>
							<li><a href="offices.php">The offices</a></li>
							<li><a href="office-plans.php">Plans</a></li>                    
							<li><a href="virtual-offices.php">Virtual offices</a></li>
							<li><a href="meeting-room.php">Meeting room</a></li>
							<li><a href="security.php">Security</a></li>
							<li><a href="telephones.php">Telephones</a></li>
						</ul>
						
					</div>
				</div>
				<div id="secondary">
					
				</div>
			</div>
			<?php include("inc/footer.php"); ?>			
		</div>
	</body> 
</html>