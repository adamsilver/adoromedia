<?php include("inc/doctype.php"); ?>
<?php include("inc/site.php"); ?>
<?php include("inc/Rules.php"); ?>
<?php include("inc/FormValidator.php"); ?>
<?php include("inc/claimForm.php"); ?>
<?php
	$metaKeywords = "accident claim, personal injury claim, claim online";
	$metaDescription = "Make a free accident claim with The Accident Specialists on 020 8455 4199. All advice is Free.";
	$siteSection = "claim";
?>

<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	    <title>Make an accident claim online, The Accident Specialists, North West London</title>
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
						<p>If you would like to find out how our accident specialists can help you make a no win no fee
						claim, simply fill in our short form below for a free claim assessment - with no obligation.</p>
						
						
						<div id="claimForm">
						
							
							<?php 
								$showForm = true;
								if(isset($_POST["actionSubmit"])) {
									$formClaim->validate();
									if($formClaim->getErrorCount() > 0) {
										$commonErrors = $formClaim->getErrors();
										include("inc/errorMessageDisplay.php");
									}
									else {
										include("inc/successMessageDisplay.php");
										$to = "enquiries@accident-specialists.co.uk";
										$subject = "Website: Enquiry";
										
										$body = "<h1>You have received the following enquiry through the website</h1>";
										$body .= "<p>Accident type: <br/>" . $_POST["accidentType"] . "</p>";
										$body .= "<p>Incident date <br/>" . $_POST["incidentDate"] . "</p>";
										$body .= "<p>Basic description: <br/>" . $_POST["basicDescription"] . "</p>";
										$body .= "<p>Full name: <br/>" . $_POST["fullName"] . "</p>";
										$body .= "<p>DOB: <br/>" . $_POST["dob"] . "</p>";
										$body .= "<p>Day time phone: <br/>" . $_POST["dayTimePhone"] . "</p>";
										$body .= "<p>Alternative phone: <br/>" . $_POST["alternativePhone"] . "</p>";
										$body .= "<p>Email: <br/>" . $_POST["email"] . "</p>";
										$body .= "<p>Address: <br/>" . $_POST["addressLine1"] . "</p>";
										$body .= "<p>Post code: <br/>" . $_POST["postCode"] . "</p>";								
										
										$headers  = 'MIME-Version: 1.0' . "\r\n";
										$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
										$headers .= 'From: Website <noreply@accident-specialists.co.uk>' . "\r\n";
										mail($to, $subject, $body, $headers);
										$showForm = false;
									}
								}
							?>					
					
							<?php if($showForm) { ?>
							<form method="post" action="claim.php">
								<input type="hidden" name="actionSubmit" value="true" />
								<div class="field">
									<div class="indicator">
										<label for="accidentType">Accident type: </label>
									</div>
									<div class="singleInput">
										<select id="accidentType" name="accidentType">
											<option value="1">Accidents / Illness abroad</option>
											<option value="2">Accidents at work</option>
											<option value="3">Animal attacks</option>
											<option value="4">Criminal injury</option>
											<option value="5">Cycling accidents</option>
											<option value="6">Faulty products</option>
											<option value="7">Major disasters</option>
											<option value="8">Medical negligence</option>
											<option value="9">Professional negligence</option>
											<option value="10">Public Liability</option>
											<option value="11">Road traffic accident</option>
											<option value="12">Slipping and tripping</option>
											<option value="13">Sport / leisure injury</option>
											<option value="14">Work-related disease</option>
										</select>
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="incidentDate">Incident date: </label>
									</div>
									<div class="singleInput">
										<select id="incidentDate" name="incidentDate">
											<option value="1">Last 3 months</option>
											<option value="2">Last 6 months</option>
											<option value="3">1 year</option>
											<option value="4">2 years</option>
											<option value="5">3 years</option>
										</select>
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="basicDescription">Basic description: *</label>
									</div>
									<div class="singleInput">
										<textarea id="basicDescription" name="basicDescription"><?php echo isset($_POST["basicDescription"]) ? $_POST["basicDescription"] : "" ?></textarea>
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="fullName">Full name: *</label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="fullName" id="fullName" value="<?php echo isset($_POST["fullName"]) ? $_POST["fullName"] : "" ?>" />
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="dob">Date of birth: </label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="dob" id="dob"/> i.e. 19/10/1975 
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="dayTimePhone">Daytime phone: *</label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="dayTimePhone" id="dayTimePhone" value="<?php echo isset($_POST["dayTimePhone"]) ? $_POST["dayTimePhone"] : "" ?>"/>
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="alternativePhone">Alternative phone: </label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="alternativePhone" id="alternativePhone" value="<?php echo isset($_POST["alternativePhone"]) ? $_POST["alternativePhone"] : "" ?>"/>
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="email">Email address: </label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="email" id="email" value="<?php echo isset($_POST["email"]) ? $_POST["email"] : "" ?>"/>
									</div>
								</div>	
								<div class="field">
									<div class="indicator">
										<label for="addressLine1">Address: *</label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="addressLine1" id="addressLine1" value="<?php echo isset($_POST["addressLine1"]) ? $_POST["addressLine1"] : "" ?>"/>
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="postCode">Post code: *</label>
									</div>
									<div class="singleInput">
										<input class="text" type="text" name="postCode" id="postCode" value="<?php echo isset($_POST["postCode"]) ? $_POST["postCode"] : "" ?>"/>
									</div>
								</div>
								<div class="actions">
									<input type="submit" class="submit" name="send" value="Submit claim" />
								</div>
							</form>
							
							<?php } ?>
						</div>
						
					</div>
					<div id="secondary">
						<div id="secondaryNavigation">
							<h2>Further information</h2>
							<ul>
								<li><a href="faq.php#noWinNoFeeClaim">No win, no fee claim</a></li>
								<li><a href="claims-process.php">Claim process</a></li>
								<li><a href="about.php">About The Accident Specialists</a></li>
								<li><a href="faq.php#howMuch">How much will it cost me?</a></li>
							</ul>
						</div>
						
						<div class="testimonial">
							<h2>What our clients say</h2>							
							<p>The Accident Specialists helped me through a traumatic case where an uninsured motorist collided with my vehicle. They had me in a free courtesy car within 4 hours of the incident, my car placed into secure storage and shortly thereafter repaired in an approved body shop. The compensation they obtained for me, with all of the above alleviated so much time and hassle</p>
							<p class="clientName">Aileen McNamara</p>
						</div>
						
					</div>
				</div>
			</div>
			<?php include("inc/footer.php"); ?>
		</div>
	</body>
</html>