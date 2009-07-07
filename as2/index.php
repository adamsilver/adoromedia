<?php include("inc/doctype.php"); ?>
<?php include("inc/site.php"); ?>
<?php include("inc/Classes/Rules.php"); ?>
<?php include("inc/Classes/FormValidator.php"); ?>
<?php include("inc/QuoteForm.php"); ?>
<?php
	$metaKeywords = "hello there cowboy keywords";
	$metaDescription = "hello there cowboy";
	$siteSection = "home";
?>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	    <title>The Accident Specialists, North West London</title>
		<?php include("inc/headGlobal.php"); ?>
		<?php include("inc/headCSS.php"); ?>
		<link rel="stylesheet" href="css/home.css" type="text/css" media="screen" />
		<?php include("inc/headCSSIE.php"); ?>
		<?php include("inc/headJS.php"); ?>
	</head>
	<body id="pgHomePage" class="home">
		<div id="shortcuts">
			<a href="#content">Scroll down page to main content</a>
		</div>
		<div id="container">
			<?php include("inc/header.php"); ?>
			<?php include("inc/primaryNavigation.php"); ?>
			<div id="banner">
				<div id="bannerInner">
					<img src="img/banners/face.jpg" alt="" />
					<img src="img/banners/hands.jpg" alt="" />
					<img src="img/banners/road.jpg" alt="" />
					<img src="img/banners/fax.jpg" alt="" />
				</div>
			</div>
			<div id="content">
				
				<div id="breadcrumb">
					<div id="breadcrumbInner">
						<p>You are here: </p>
						<ul>
							<li class="home"><a href="index.php"><img src="img/icons/home.jpg" alt="Home" /></a></li>
							<li>Currently viewing the Accident Specialists home page</li>
							<!--<li><a href="#">Level 2</a></li>
							<li class="on">Level 3</li>-->
						</ul>
					</div>
				</div
				
				<div id="sections">
				
					<div id="primary">
						<h1>The Accident Specialists, based in London, UK</h1>
						
						<div id="hero">
							<h2>Injured in an accident?</h2>
							<ul>
								<li>No win, no fee claim</li>
								<li>Lorem ipsum</li>
								<li>Lorem ipsum something</li>
							</ul>
							
							<input type="image" class="image rollover" name="send" src="img/buttons/submit_claim.jpg" alt="Submit claim" />					
							
						</div>
						
						<h2>No win, no fee claim</h2>
						
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel lectus ligula, at gravida velit. 
						Sed massa sem, feugiat id lobortis sed, sodales a turpis. Donec eleifend tellus a nisl bibendum eget 
						malesuada nunc iaculis. Fusce facilisis, felis et euismod ullamcorper, nulla est sodales neque.</p>
						
						<h2>Claim process</h2>
						
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel lectus ligula, at gravida velit. 
						Sed massa sem, feugiat id lobortis sed, sodales a turpis. Donec eleifend tellus a nisl bibendum eget 
						malesuada nunc iaculis. Fusce facilisis, felis et euismod ullamcorper, nulla est sodales neque.</p>
						
						<h2>Personal injury</h2>
						
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel lectus ligula, at gravida velit. 
						Sed massa sem, feugiat id lobortis sed, sodales a turpis. Donec eleifend tellus a nisl bibendum eget 
						malesuada nunc iaculis. Fusce facilisis, felis et euismod ullamcorper, nulla est sodales neque.</p>
						
						<h2>London based</h2>
						
						<p>Lorem ipsum fusce facilisis, felis et euismod ullamcorper, nulla est sodales neque.</p>
						
					</div>
					<div id="secondary">
						<div id="callMeBack">
							<h2>Call me back</h2>
							<p>We will call you back for convenience.</p>

							<?php 
								$showForm = true;
								if(isset($_POST["actionSubmit"])) {
									$quoteForm->validate();
									if($quoteForm->getErrorCount() > 0) {
										$commonErrors = $quoteForm->getErrors();
										include("inc/errorMessageDisplay.php");
									}
									else {
										include("inc/successMessageDisplay.php");
										$showForm = false;
									}
								}
							?>
							
							<?php if($showForm) { ?>
								<form method="post" action="index.php">
									<input type="hidden" name="actionSubmit" value="true" />
														
									<div class="field">
										<div class="indicator">
											<label for="fullName">Name: </label>
										</div>
										<div class="singleInput">
											<input class="text" type="text" name="fullName" id="fullName" />
										</div>
									</div>
									<div class="field">
										<div class="indicator">
											<label for="phone">Phone:</label>
										</div>
										<div class="singleInput">
											<input class="text" type="text" name="phone" id="phone" />
										</div>
									</div>
									<div class="field">
										<div class="indicator">
											<label for="postcode">Post code: </label>
										</div>
										<div class="singleInput">
											<input class="text" type="text" name="postcode" id="postcode" />
										</div>
									</div>
									<div class="field">
										<div class="indicator">
											<label for="emailAddress">Email address: </label>
										</div>
										<div class="singleInput">
											<input class="text" type="text" name="emailAddress" id="emailAddress" />
										</div>
									</div>	
									
									<div class="actions">	
										<input type="image" class="image rollover" name="send" src="img/buttons/submit.jpg" alt="Submit claim" />					
									</div>
								</form>
							<?php } ?>
						</div>
					</div>
				</div>
			</div>
			<?php include("inc/footer.php"); ?>
		</div>
	</body>
</html>