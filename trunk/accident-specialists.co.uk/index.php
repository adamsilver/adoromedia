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
					stuff
				</div>
			<div id="content">
				
				<div id="breadcrumb">sad</div>
				<div id="primary">
					<h1>Injury lawyers, accident claims, North West London, UK</h1>
				</div>
				<div id="secondary">
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