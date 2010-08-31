<?php include("inc/doctype.php"); ?>
<?php include("inc/site.php"); ?>
<?php include("inc/Rules.php"); ?>
<?php include("inc/FormValidator.php"); ?>
<?php include("inc/callMeBackForm.php"); ?>
<?php
	$metaKeywords = "accident specialists, accident claims, persoanl injury, north, west, london";
	$metaDescription = "The Accident Specialists based in North West London are one of the UK's leading Accident Claim Specialists.";
	$siteSection = "home";
?>


<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	    <title>The Accident Specialists, North West London - 100% compensation, no win no fee, personal injury</title>
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
							<p ><a class="submit" href="claim.php">Claim now</a></p>
						</div>
					
						<div id="homeInfo">
							<h1>The Accident Specialists <span>- accident claims, no win no fee and personal injury, North West London</span></h1>

							<p>Since 1999 The Accident Specialists have been helping people who have suffered a Personal Injury, through no fault of their own, gain access to justice and claim the compensation they deserve. <a href="about.php">Find out more about The Accident Specialists</a></p>
							
							
							
							
							
							<!--
							<p>We are one of the leading accident claim firms in the UK, who guarantee a No Win No Fee service - that means, if successful you receive 100% of the compensation. *</p>
							
							<p>A minor injury can cause pain and discomfort; affecting your day-to-day activities. Here At The Accident Specialists we pride ourselves on helping thousands of people claim the compensation they deserve.</p>
							-->
							<!--<h2>No win, no fee claim</h2>-->
							
							<h2>Claim process</h2>							
							<p>At The Accident Specialists we make the claims process simple. We put you in touch with one of our local specialist solicitors who will keep you informed every step of the way. <a href="claims-process.php">Find out more about the claims process</a></p>
							<!--<p>Each claimant who calls us will have their claim assessed - our team will decide whether they feel you are eligible to make a no win no fee claim. If they decide you are eligible, they will have you fill out the claim form and pass it on to the solicitors within minutes!</p>
							<p>We will put you in touch with our specialist Personal Injury Solicitors who will act on your behalf, so you never pay a penny to claim. Often you have suffered not just physically, but financially too, so we can also help you claim back any costs you have incurred due to your injury.</p>
							-->
							<h2>Personal injury</h2>							
							<p>If you have suffered an accident in the last three years call our phone helpline on 0208 455 4199 to speak to a member of our team. Or simply submit your details on our brief online claim form and we will contact you within the hour. <a href="personal-injury-claims.php">Find out more about personal injury</a></p>
							<!--<p>For more information call our team of friendly adviser's or fill out a short claim online form and we will get back to you. It really is that simple. </p>-->
							
							<h2>London based</h2>							
							<p>The Accident Specialists are based in North London in Hampstead Garden Suburb and have an open door policy, we want to walk you through the claims process each step of the way and welcome our clients. The Accident Specialists prefer to deal with our clients on a personal basis to provide the customer service we feel they deserve. <a href="contact.php">Contact The Accident Specialists</a></p>

						</div>
						
					</div>
					<div id="secondary">
						<div id="callMeBack">
							<h2>Call me back</h2>
							<p>An Accident Specialist, will call you back within minutes to help you with your claim.</p>
							
							<?php 
								$showForm = true;
								if(isset($_POST["actionSubmit"])) {
									$formCallMeBack->validate();
									if($formCallMeBack->getErrorCount() > 0) {
										$commonErrors = $formCallMeBack->getErrors();
										include("inc/errorMessageDisplay.php");
									}
									else {
										include("inc/successMessageDisplay.php");
										$to = "enquiries@accident-specialists.co.uk";
										$subject = "Website: Enquiry";
										$body = "<h1>You have received the following enquiry through the website</h1>";
										$body .= "<p>Name: <br/>" . $_POST["fullName"] . "</p>";
										$body .= "<p>Phone: <br/>" . $_POST["phone"] . "</p>";
										$body .= "<p>Post code: <br/>" . $_POST["postCode"] . "</p>";
										$body .= "<p>Email: <br/>" . $_POST["email"] . "</p>";
										$headers  = 'MIME-Version: 1.0' . "\r\n";
										$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
										$headers .= 'From: Website <noreply@accident-specialists.co.uk>' . "\r\n";
										mail($to, $subject, $body, $headers);
										$showForm = false;
									}
								}
							?>					
					
							<?php if($showForm) { ?>								
								
							
								<form method="post" action="index.php">
									<input type="hidden" name="actionSubmit" value="true" />
									<div class="field">
										<div class="indicator">
											<label for="fullName">Name: *</label>
										</div>
										<div class="singleInput">
											<input class="text" type="text" name="fullName" id="fullName" value="<?php echo isset($_POST["fullName"]) ? $_POST["fullName"] : "" ?>" />
										</div>
									</div>					
									<div class="field">
										<div class="indicator">
											<label for="phone">Phone: *</label>
										</div>
										<div class="singleInput">
											<input class="text" type="text" name="phone" id="phone" value="<?php echo isset($_POST["phone"]) ? $_POST["phone"] : "" ?>" />
										</div>
									</div>
									<div class="field">
										<div class="indicator">
											<label for="postCode">Post code:</label>
										</div>
										<div class="singleInput">
											<input class="text" type="text" name="postCode" id="postCode" value="<?php echo isset($_POST["postCode"]) ? $_POST["postCode"] : "" ?>" />
										</div>
									</div>
									<div class="field">
										<div class="indicator">
											<label for="email">Email:</label>
										</div>
										<div class="singleInput">
											<input class="text" type="text" name="email" id="email" value="<?php echo isset($_POST["email"]) ? $_POST["email"] : "" ?>" />
										</div>
									</div>								
									<div class="actions">
										<input type="submit" class="submit" name="send" value="Call me back" />
									</div>
								</form>
							<?php } ?>
						</div>
						
						<div class="testimonial">
							<h2>What our clients say</h2>							
							<p>"The Accident Specialists provide a first class service. Their claim management is fantastic, I was kept up to date with the claims process through each step of the way and they successfully gained the compensation I deserved."</p>
							<p class="clientName">Mohammed Jama</p>
						</div>
						
					</div>
				</div>
			</div>
			<?php include("inc/footer.php"); ?>
		</div>
	</body>
</html>