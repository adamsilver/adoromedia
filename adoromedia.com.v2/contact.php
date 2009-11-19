<?php include("inc/doctype.php"); ?>
<?php include("inc/site.php"); ?>
<?php include("inc/Classes/BreadCrumbItem.php"); ?>
<?php include("inc/Classes/Rules.php"); ?>
<?php include("inc/Classes/FormValidator.php"); ?>
<?php
	$metaKeywords = "adoro media, website, web, bespoke, new, media, solutions, london, UK";
	$metaDescription = "Adoro Media is an agency dedicated to building new media solutions. Based in London, England.";
	$siteSection = "contact";
	$breadcrumb = array(new BreadCrumbItem("index.php", "Home"), new BreadCrumbItem(null, "Contact"));
?>

<?php 
	$contactForm = new FormValidator();
	$contactForm->addValidator("fullName", array(new Rule("isNotEmpty", "Full name cannot be empty")));
	$contactForm->addValidator("email", array(new Rule("isNotEmpty", "Email cannot be empty")));
	$contactForm->addValidator("message", array(new Rule("isNotEmpty", "Message cannot be empty")));
?>

<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	    <title>Contact, Expert website designers, Adoro Media, London, UK</title>
		<?php include("inc/headGlobal.php"); ?>
		<?php include("inc/headCSS.php"); ?>
		<?php include("inc/headCSSIE.php"); ?>
		<?php include("inc/headJS.php"); ?>
	</head>
	<body id="pgContact" class="contact">
		<div id="container">
			<div id="header">
				<?php include("inc/logo.php"); ?>
				<?php include("inc/primaryNavigation.php"); ?>
			</div>
			<div id="content">
				
				<?php include("inc/breadcrumb.php"); ?>
			
				<div id="sections">
					<div id="primary">
						<div id="contactFormPanel">
							<h1>Contact details</h1>
							<p>We want to work with you to produce a better website.</p>
							
							<?php 
								$showForm = true;
								if(isset($_POST["actionSubmit"])) {
									$contactForm->validate();
									if($contactForm->getErrorCount() > 0) {
										$commonErrors = $contactForm->getErrors();
										include("inc/errorMessageDisplay.php");
									}
									else {
										include("inc/successMessageDisplay.php");
										
										$to  = 'adam@adoromedia.com';
										$subject = 'Website Adoro Media';
																			
										$message = '<h1>Adoro Media Website Form</h1>';
										$message .= '<p>Full name: '.$_POST["fullName"].'</p>';
										$message .= '<p>Email: '.$_POST["email"].'</p>';
										$message .= '<p>Message:'.$_POST["message"].'</p>';
										
										// To send HTML mail, the Content-type header must be set
										$headers  = 'MIME-Version: 1.0' . "\r\n";
										$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

										mail($to, $subject, $message, $headers);
										
										$showForm = false;
									}
								}
							?>
							
							<?php if($showForm) { ?>
							
								
								<form method="post" action="contact.php" id="contactForm">
									<input type="hidden" name="actionSubmit" value="1" />
									<div class="field">
										<div class="indicator">
											<label for="fullName"><span class="required">*</span> Full name</label>
										</div>
										<div class="singleInput">
											<input type="text" id="fullName" name="fullName" value="<?php echo formValue("fullName")?>" class="text" />
										</div>
									</div>
									<div class="field">
										<div class="indicator">
											<label for="email"><span class="required">*</span> Email</label>
										</div>
										<div class="singleInput">
											<input type="text" id="email" name="email" value="<?php echo formValue("email")?>" class="text" />
										</div>
									</div>
								
									<div class="field">
										<div class="indicator">
											<label for="message"><span class="required">*</span> Message</label>
										</div>
										<div class="singleInput">
											<textarea id="message" name="message" cols="40" rows="8"><?php echo formValue("message")?></textarea>
										</div>
									</div>
									<div class="action">
										<input class="submit" type="submit" name="sendMessage" id="sendMessage" value="Send" />
									</div>
								</form>
								
							<?php } ?>
							
						</div>
					</div>
					<div id="secondary">
						<h2>Alternatively</h2>
						<p>Tel: +44 (0) 771 349 0316</p>
						<p>Email: info@adoromedia.com</p>
					</div>
				</div>
			</div>
			<?php include("inc/footer.php"); ?>
		</div>
		<?php include("inc/ga.php"); ?>
	</body>
</html>