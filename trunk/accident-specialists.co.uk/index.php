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
		<link rel="stylesheet" href="css/home.css" type="text/css" media="screen" />
		<?php include("inc/headCSSIE.php"); ?>
		<?php include("inc/headJS.php"); ?>
	</head>
	<body id="pgHomePage" class="home">
		<div id="container">
			<?php include("inc/header.php"); ?>
			<?php include("inc/primaryNavigation.php"); ?>
			<div id="banner">
				<div id="bannerInner">
					<!--<p>Had an accident...? Not your fault? The Accident Specialist can help you!</p>-->
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
						<h1>Professional accident specialists</h1>
						
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
						
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel lectus ligula, at gravida velit. 
						Sed massa sem, feugiat id lobortis sed, sodales a turpis. Donec eleifend tellus a nisl bibendum eget 
						malesuada nunc iaculis. Fusce facilisis, felis et euismod ullamcorper, nulla est sodales neque.</p>
						
						<!--
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

						
						-->
					</div>
					<div id="secondary">
						<div id="claimForm">
							<h2>Online claim form</h2>
							<p>It only takes 2 minutes to complete.</p>
							
							<form method="post" action="index.php">
								<div class="field">
									<div class="indicator">
										<label for="accidentType">Accident type</label>
									</div>
									<div class="singleInput">
										<select id="accidentType" name="accidentType">
											<option value="1">1</option>
										</select>
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="incidentDate">Incident date</label>
									</div>
									<div class="singleInput">
										<select id="incidentDate" name="incidentDate">
											<option value="1">Last 6 months</option>
										</select>
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="basicDescription">Basic description</label>
									</div>
									<div class="singleInput">
										<textarea id="basicDescription" name="basicDescription"></textarea>
									</div>
								</div>						
								<div class="field">
									<div class="indicator">
										<label for="title">Title</label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="title" id="title" />
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="firstName">First name</label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="firstName" id="firstName" />
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="lastName">Last name</label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="lastName" id="lastName" />
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="dob">Date of birth</label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="dob" id="dob" />
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="dayTimePhone">Daytime phone</label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="dayTimePhone" id="dayTimePhone" />
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="alternativePhone">Alternative phone</label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="alternativePhone" id="alternativePhone" />
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="emailAddress">Email address</label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="emailAddress" id="emailAddress" />
									</div>
								</div>	
								<div class="field">
									<div class="indicator">
										<label for="addressLine1">Address line 1</label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="addressLine1" id="addressLine1" />
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="addressLine2">Address line 2</label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="addressLine2" id="addressLine2" />
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="town">Town/City</label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="town" id="town" />
									</div>
								</div>
														<div class="field">
									<div class="indicator">
										<label for="postCode">Post code</label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="postCode" id="postCode" />
									</div>
								</div>
								<div class="actions">						
									<input class="submit" type="submit" name="send" value="Submit online claim" />
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