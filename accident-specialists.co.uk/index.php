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
				<div id="bannerInner">
					<p>Had an accident...? Not your fault? The Accident Specialist can help you!</p>
				</div>
			</div>
			<div id="content">
				
				<div id="breadcrumb">
					<div id="breadcrumbInner">
						<p>You are here: </p>
						<ul>
							<li><a href="#"><img src="icon_home.jpg" /></a></li>
							<li class="on">Inner page</li>
						</ul>
					</div>
				</div
				
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
							<input type="submit" name="send" value="Claim" />
						</div>
					</form>
				</div>
			</div>
			<?//php include("inc/footer.php"); ?>
		</div>
	</body>
</html>