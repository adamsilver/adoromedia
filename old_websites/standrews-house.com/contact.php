<!DOCTYPE html>
<?php
	$metaKeywords = "Serviced, Offices, Crawley, Gatwick, Area, Hire, Rent, St, Andrews, House";
	$metaDescription = "Serviced offices for hire, based in Crawley &amp; Gatwick, St Andrews House";
	$siteSection = "contact";
?>
<?php include("inc/Rules.php"); ?>
<?php include("inc/FormValidator.php"); ?>
<?php include("inc/enquiryForm.php"); ?>
<html lang="en"> 
	<head>
		<title>Contact, Services, Serviced offices based in Crawley &amp; Gatwick, St Andrews House</title> 
		<?php include("inc/headGlobal.php"); ?>
		<?php include("inc/globalCss.php"); ?>
		<?php include("inc/globalCssIe.php"); ?>
		<?php include("inc/globalJs.php"); ?>
		<script src="http://maps.google.com/maps?file=api&amp;v=2&amp;key=ABQIAAAAcCPnNaC9ucSS0iuyWMhdNhRlgHUB7bTgx1y4m6xktoUIz_8KBBTQPVYTkabONVgXodH-RSM8fnnovQ" type="text/javascript"></script>
		<script type="text/javascript" src="js/Adoro/Adoro.GoogleMap.js"></script>
		<script type="text/javascript" src="js/App/App.Map.js"></script>
	</head> 
	<body id="pgContact">
		<div id="container">
			<div id="header">
				<?php include("inc/logo.php"); ?>
				<?php include("inc/testimonial.php"); ?>
			</div>
			<?php include("inc/nav.php"); ?>
						
			<div id="content">
				<div id="breadcrumb">
					<p>You are viewing:</p>
					<ul>
						<li><a href="index.php">Home page</a></li>
						<li>Contact</li>
					</ul>
				</div>
				
				<div id="primary">
					
					<div id="contact">
						<h1>Contact us about our serviced offices</h1>
						
						
						<h2>See our location map </h2>
						<p>We are situated a few minutes walk from Crawley Station and Gatwick Airport
						is only a 10 minute <br/>drive by car.</p>
						<div id="map">
							
						</div>
						<p>St Andrews House is the focus of a development of freehold office buildings
						known as Gleneagles Court, in Southgate, Crawley and is a short walk from the
						town centre with its multiple shopping facilities.</p>
						
						
						

						
					</div>
					
					
					
					
					
											
					
				</div>
				<div id="secondary">
					<div id="contactDetails">
						<h2>General details</h2>				
						
						<p class="address"><strong>St Andrews House</strong>
							<br/>26 Brighton Rd
							<br/>Crawley
							<br/>West Sussex
							<br/>RH10 6AA</p>
						
						<p class="telephone">To call us: telephone 01293 543641</p>
						
						<p class="email">To email us: <a href="mailto:enquiries@standrews-house.com">enquiries@standrews-house.com</a></p>
						
					</div>
					
					<div id="enquiryForm">
						<h2>Enquiry form</h2>
						<p>Should you have any specific requirements or requests just let us
						know and we will try to accommodate you.</p>
						<?php 
							$showForm = true;
							if(isset($_POST["actionSubmit"])) {
								$formEnquiry->validate();
								if($formEnquiry->getErrorCount() > 0) {
									$commonErrors = $formEnquiry->getErrors();
									include("inc/errorMessageDisplay.php");
								}
								else {
									include("inc/successMessageDisplay.php");
									$to = "enquiries@standrews-house.com";
									$subject = "Website: Enquiry";
									$body = "<h1>You have received the following enquiry through the website</h1>";
									$body .= "<p>Name: <br/>" . $_POST["yourname"] . "</p>";
									$body .= "<p>Email: <br/>" . $_POST["email"] . "</p>";
									$body .= "<p>Message: <br/>" . $_POST["message"] . "</p>";
									$headers  = 'MIME-Version: 1.0' . "\r\n";
									$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
									$headers .= 'From: Website <noreply@standrews-house.com>' . "\r\n";
									mail($to, $subject, $body, $headers);
									$showForm = false;
								}
							}
						?>					
					
						<?php if($showForm) { ?>						
							<form action="contact.php" method="post">
								<input type="hidden" name="actionSubmit" value="true" />
								<div class="field">
									<div class="indicator">
										<label for="yourname">
											Your name: *
										</label>
									</div>
									<div class="singleInput">
										<input type="text" class="text" name="yourname" id="yourname" value="<?php echo isset($_POST["yourname"]) ? $_POST["yourname"] : "" ?>"/>
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="email">
											Your email: *
										</label>
									</div>
									<div class="singleInput">
										<input type="text" class="text" name="email" id="email" value="<?php echo isset($_POST["email"]) ? $_POST["email"] : "" ?>"/>
									</div>
								</div>
								<div class="field">
									<div class="indicator">
										<label for="message">
											Your requirement: *
										</label>
									</div>
									<div class="singleInput">
										<textarea name="message" id="message"><?php echo isset($_POST["message"]) ? $_POST["message"] : "" ?></textarea>
									</div>
								</div>
								<div class="actions">
									<input type="submit" name="send" id="send" value="Send enquiry" />
								</div>
							</form>
						<?php } ?>
						
					</div>
				</div>
			</div>
			<?php include("inc/footer.php"); ?>			
		</div>
	</body> 
</html>