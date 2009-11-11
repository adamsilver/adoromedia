<?php include("inc/doctype.php"); ?>
<?php include("inc/site.php"); ?>
<?php include("inc/Classes/Rules.php"); ?>
<?php include("inc/Classes/FormValidator.php"); ?>
<?php
	$metaKeywords = "hello there cowboy keywords";
	$metaDescription = "hello there cowboy";
	$siteSection = "claim";
?>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	    <title>Claim, The Accident Specialists, North West London</title>
		<?php include("inc/headGlobal.php"); ?>
		<?php include("inc/headCSS.php"); ?>
		<link rel="stylesheet" href="css/claim.css" type="text/css" media="screen" />
		<?php include("inc/headCSSIE.php"); ?>
		<?php include("inc/headJS.php"); ?>
	</head>
	<body id="pgClaim" class="claim">
		<div id="container">
			<?php include("inc/header.php"); ?>
			<?php include("inc/primaryNavigation.php"); ?>
			<div id="content">
								
				<div id="sections">
				
					<div id="primary">
						<h1>Claim form</h1>
						<p>Lorem ipsum dollar</p>
						
						<div id="claimForm">
						
							
							<form method="post" action="claim.php">
								<input type="hidden" name="actionSubmit" value="true" />
								<div class="field">
									<div class="indicator">
										<label for="accidentType">Accident type: </label>
									</div>
									<div class="singleInput">
										<select id="accidentType" name="accidentType">
											<option value="1">1</option>
										</select>
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="incidentDate">Incident date: </label>
									</div>
									<div class="singleInput">
										<select id="incidentDate" name="incidentDate">
											<option value="1">Last 6 months</option>
										</select>
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="basicDescription">Basic description: </label>
									</div>
									<div class="singleInput">
										<textarea id="basicDescription" name="basicDescription"><?php echo isset($_POST["basicDescription"]) ? $_POST["basicDescription"] : "" ?></textarea>
									</div>
								</div>						
								<div class="field">
									<div class="indicator">
										<label for="title">Title: </label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="title" id="title" />
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="firstName">First name: </label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="firstName" id="firstName" value="<?php echo isset($_POST["firstName"]) ? $_POST["firstName"] : "" ?>" />
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="lastName">Last name: </label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="lastName" id="lastName" value="<?php echo isset($_POST["lastName"]) ? $_POST["lastName"] : "" ?>" />
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="dob">Date of birth: </label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="dob" id="dob" />
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="dayTimePhone">Daytime phone:</label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="dayTimePhone" id="dayTimePhone" />
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="alternativePhone">Alternative phone: </label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="alternativePhone" id="alternativePhone" />
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
								<div class="field">
									<div class="indicator">
										<label for="addressLine1">Address line 1: </label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="addressLine1" id="addressLine1" />
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="addressLine2">Address line 2: </label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="addressLine2" id="addressLine2" />
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="town">Town/City: </label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="town" id="town" />
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="postCode">Post code:</label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="postCode" id="postCode" />
									</div>
								</div>
								<div class="actions">	
									<!--<input type="image" class="image" name="send" src="img/btn_claim_now.jpg" alt="Submit claim" />					-->
									
									<input type="submit" class="submit" name="send" value="Submit claim" />
								</div>
							</form>
						</div>
						
					</div>
					<div id="secondary">
						<div id="secondaryNavigation">
							<h2>Further information</h2>
							<ul>
								<li><a href="#">No win, no fee claim</a></li>
								<li><a href="#">Claim form</a></li>
								<li><a href="#">Claim process</a></li>
								<li><a href="#">What can I claim?</a></li>
							</ul>
						</div>
						<div class="faqPanel">
							<h2>Questions and answers</h2>
							<ul>
								<li>Why choose Accidents Direct?</li>
								<li>What does the claim process involve?</li>
								<li>How much will it cost me?</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<?php include("inc/footer.php"); ?>
		</div>
	</body>
</html>