<!DOCTYPE html>
<?php
	$metaKeywords = "adoro media, website design, website development, london";
	$metaDescription = "Adoro Media is a website design and development agency. Based in London.";
	$siteSection = "pricing";
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
						<li>Pricing</li>
					</ul>
				</div>
				
				<div id="primary">
					
					<div id="homepage">
					
						<h1>Pricing</h1>
						
						<ul>
							<li>A returnable deposit of &#163;500 (less the cost of redecoration) is required for each office.</li>
							<li>The office rental is subject to a full three calendar month notice of termination.</li>
							<li>The rental term can be varied upwards from 3 months to suit individual needs.</li>
							<li>See OFFICE AGREEMENT FORM.</li>
							<li>See BUSINESS SERVICES AGREEMENT FORM.</li>
							<li>See SERVICE AND FACILITY Price List.</li>
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