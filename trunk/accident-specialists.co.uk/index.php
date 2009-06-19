<?php include("inc/doctype.php"); ?>
<?php include("inc/site.php"); ?>
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
		<?php include("inc/headCSSIE.php"); ?>
		<?php include("inc/headJS.php"); ?>
	</head>
	<body id="pgHomePage" class="home">
		<div id="container">
			<?php include("inc/header.php"); ?>
			<?php include("inc/primaryNavigation.php"); ?>
			<div id="banner">
				<p>Had an accident...? Not your fault? The Accident Specialist can help you!</p>
			</div>
			<div id="content">
				
				<div id="breadcrumb">sad</div>
				<div id="primary">
					<h1>Specialising in compensation for injury, vehicle replacement and protected no claims, in the North West London area.</h1>
					
					<h2>Stuff to do</h2>
					
					<ul>
						<li>google map</li>
						<li>Carousel - quotes - fading effect?</li>
						<li>Imagery</li>
						<li>back to top linsk</li>
						<li>skip links - animate to content</li>
						<li>Look at apple design structure with red and blue</li>
						<li>Calendar pickers?</li>
					</ul>
					
					<h2>Claim now</h2>

					<?php 
						foreach($_POST as $key => $data) {
							echo $data . "<br/>";
						};
					?>

					<form method="post" action="index.php">
						<div class="field">
							<div class="indicator">
								<label for="fullName">Full name</label>
							</div>
							<div class="singleInput">
								<input class="text" type="text" name="fullName" id="fullName" />
							</div>
						</div>
						<div class="field">
							<div class="indicator">
								<label for="age">Age</label>
							</div>
							<div class="singleInput">
								<input class="text" type="text" name="age" id="age" />
							</div>
						</div>
						<input type="submit" name="send" value="Claim" /> 
					</form>
				</div>
			</div>
			<?php include("inc/footer.php"); ?>
		</div>
	</body>
</html>