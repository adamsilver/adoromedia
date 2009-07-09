<?php include("inc/doctype.php"); ?>
<?php include("inc/site.php"); ?>
<?php include("inc/Classes/Rules.php"); ?>
<?php include("inc/Classes/FormValidator.php"); ?>
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
		<div id="container">
			<?php include("inc/header.php"); ?>
			<?php include("inc/primaryNavigation.php"); ?>
			<div id="content">
								
				<div id="sections">
				
					<div id="primary">
						<div id="splash">
							<h2>Injured in an accident?</h2>
							<ul>
								<li>Totally free service</li>
								<li>100% compensation</li>
								<li>No win no fee</li>
							</ul>
							<p><a href=""><img src="img/btn_claim_now.jpg" alt="" /></a></p>
						</div>
					
						<div id="homeInfo">
							<h1>The Accident Specialists</h1>
							
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel lectus ligula, at gravida velit. 
							Sed massa sem, feugiat id lobortis sed, sodales a turpis. Donec eleifend tellus a nisl bibendum eget 
							malesuada nunc iaculis. Fusce facilisis, felis et euismod ullamcorper, nulla est sodales neque.</p>
							
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
						
					</div>
					<div id="secondary">
						<div id="callMeBack">
							<h2>Call me back</h2>
							<p>An Accident Specialist, will call you back within minutes to help you with your claim.</p>
							<form method="post" action="index.php">
								<input type="hidden" name="actionSubmit" value="true" />
								<div class="field">
									<div class="indicator">
										<label for="incidentDate">Name: </label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="nameof" value="" />
									</div>
								</div>					
								<div class="field">
									<div class="indicator">
										<label for="firstName">Phone: </label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="firstName" id="firstName" value="<?php echo isset($_POST["firstName"]) ? $_POST["firstName"] : "" ?>" />
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="dayTimePhone">Post code:</label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="dayTimePhone" id="dayTimePhone" />
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="dayTimePhone">Email:</label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="dayTimePhone" id="dayTimePhone" />
									</div>
								</div>								
								<div class="actions">	
								<input type="image" class="image" src="img/btn_call_me_back.jpg" alt="" />				
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<?php include("inc/footer.php"); ?>
		</div>
	</body>
</html>