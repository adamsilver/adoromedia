<?php include("inc/doctype.php"); ?>
<?php include("inc/site.php"); ?>
<?php
	$metaKeywords = "adoro media, website design, website development, london";
	$metaDescription = "Adoro Media is a website design and development agency. Based in London.";
	$siteSection = "products";
?>
<html lang="en">
	<head>
	    <title>Products - Adoro Media - Website design &amp; development agency - London</title>
		<?php include("inc/headGlobal.php"); ?>
		<?php include("inc/headCSS.php"); ?>
		<?php include("inc/headCSSIE.php"); ?>
	</head>
	<body>
		<div id="container">
			<div id="header">
				<?php include("inc/logo.php"); ?>
			</div>
			<?php include("inc/primaryNavigation.php"); ?>
			<div id="slogan">
				<p>Helping <em>people</em> &amp; companies build better websites.</p>
			</div>
			<div id="content">
				<h1>Products</h1>				
				
				<div class="primary">
					<h2>Business to business products</h2>
					
					<div class="product">
						<h3>Adoro.FormValidator JavaScript Framework</h3>
						<p class="description">In short, this is an incredibly flexible JavaScript validation
						framework built on top of the popular jQuery library.</p>
						<p class="description">Form validation is one of <em>the</em>
						most crucial aspects of web development, yet most developers
						find it very tedious.</p>
						<p class="description">With this product, it will make form
						validation easy and allow the developer to meet any specification.</p>
						<p>Price <span class="price">&#163;55.00 per hour</span> for consultancy and documentation.</p>
					</div>
				</div>
				<div class="secondary">
					<h2>Business to consumer products</h2>
					<div class="product">
						<h3>Domain name registration and management</h3>
						<p class="description">We can manage aspects of the domain including
						pointing to	a particular host and recurring yearly fees ensuring ownership.</p>
						<p>Prices <span class="price"> from &#163;19.99 per year</span></p>
					</div>
					<div class="product">
						<h3>Website hosting</h3>
						<p class="description">We can host your website no matter what the requirements,
						including databases, CMS packages or simple static sites.</p>
						<p>Prices <span class="price"> from &#163;59.99 per year</span></p>
					</div>
					<div class="product">
						<h3>Email</h3>
						<p class="description">With each of our hosting packages email accounts are provided. We
						can help create these for you and set them up so that you have access
						on the web, on the computer or on a mobile phone.</p>
						<p>Prices <span class="price"> from &#163;29.99 per account</span></p>
					</div>
				</div>
				<div class="tertiary">
					<p>* Prices are subject to VAT</p>
				</div>
			</div>
			<?php include("inc/footer.php"); ?>
			<?php include("inc/ga.php"); ?>
		</div>
	</body>
</html>