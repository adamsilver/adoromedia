<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<?php include("inc/Classes/Rules.php"); ?>
<?php include("inc/Classes/FormValidator.php"); ?>
<?php include("inc/Forms/CallMeBack.php"); ?>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"> 
	<head>
		<title>Capital Rentals - London</title> 
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 
		<meta name="robots" content="all,index,follow" /> 
		<link rel="stylesheet" href="css/site.css" type="text/css" media="screen" />
		<!--[if IE 7]><link rel="stylesheet" href="css/ie7.css" type="text/css" /><![endif]-->
		<!--[if IE 6]><link rel="stylesheet" href="css/ie6.css" type="text/css" /><![endif]-->
	</head> 
	<body>
		<div id="header">
			<div id="headerInner">
				<div id="logo">
					<a href="index.php"><img src="img/logo.jpg" alt="Capital Rentals" /></a>
				</div>
				<div id="details">
					<p class="fax">F: 020 8181 6887</p>
					<p class="email">E: <a href="mailto:claims@capital-rentals.co.uk">claims@capital-rentals.co.uk</a></p>
					<p class="tel">T: 0800 987 5887</p>
				</div>
			</div>
		</div>
		<div id="content">
			<div id="primary">
			
				<div id="welcome">
					<h1>Welcome to Capital Rentals</h1>	
					<h2>Attention Mini Cab Drivers</h2>
					<p class="question">Have you had an accident that's not your fault?</p>
					
					<ul>
						<li>We will supply a fully licensed/plated car within 24 hours.</li>
						<li>We have a brand new fleet of saloons, estates, 7 seater MPV's etc.</li>
					</ul>
					
					<img src="img/van.jpg" alt="Van" />
				</div>
				
				<div id="licensed">
					<h2>Licensed</h2>
					<p>Capital Rentals is licensed and registered by the Public Carriage Office (PCO), <br/>operating in London. </p>
				</div>
				
				
				
			</div>
			<div id="secondary">

				<div id="contactForm">
					<h2>Call me back</h2>
					
					<?php 
						$showForm = true;
						if(isset($_POST["actionSubmit"])) {
							$formCallMeBack->validate();
							if($formCallMeBack->getErrorCount() > 0) {
								$commonErrors = $formCallMeBack->getErrors();
								include("inc/Forms/ErrorMessageDisplay.php");
							}
							else {
								include("inc/Forms/SuccessMessageDisplay.php");
								
								
								$to = "claims@capital-rentals.co.uk";
								$subject = "Website: Call me back";
								$body = "<h1>The following call me back submission happend</h1>";
								$body .= "<p>First name: <br/>" . $_POST["firstName"] . "</p>";
								$body .= "<p>Last name: <br/>" . $_POST["lastName"] . "</p>";
								$body .= "<p>Telephone: <br/>" . $_POST["telephone"] . "</p>";
								$body .= "<p>Email: <br/>" . $_POST["email"] . "</p>";
								$body .= "<p>Message: <br/>" . $_POST["message"] . "</p>";
								$headers  = 'MIME-Version: 1.0' . "\r\n";
								$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
								$headers .= 'From: Website <noreply@capital-rentals.co.uk>' . "\r\n";
								mail($to, $subject, $body, $headers);
								$showForm = false;
							}
						}
					?>					
					
					<?php if($showForm) { ?>
						<p>Please use the form below to get in touch with us.</p>
						<p>Fields marked with an <em>asterisk (*)</em> are mandatory.</p>
					
						<form method="post" action="index.php">
							<input type="hidden" name="actionSubmit" value="true" />
							<div class="field">
								<div class="indicator"><label for="firstName">First name *</label></div>
								<div class="singleInput"><input class="text" type="text" name="firstName" id="firstName" value="<?php echo isset($_POST["firstName"]) ? $_POST["firstName"] : "" ?>" /></div>
							</div>
							<div class="field">
								<div class="indicator"><label for="lastName">Last name</label></div>
								<div class="singleInput"><input class="text" type="text" name="lastName" id="lastName" value="<?php echo isset($_POST["lastName"]) ? $_POST["lastName"] : "" ?>"/></div>
							</div>
							<div class="field">
								<div class="indicator"><label for="telephone">Telephone *</label></div>
								<div class="singleInput"><input class="text" type="text" name="telephone" id="telephone" value="<?php echo isset($_POST["telephone"]) ? $_POST["telephone"] : "" ?>"/></div>
							</div>
							<div class="field">
								<div class="indicator"><label for="email">Email *</label></div>
								<div class="singleInput"><input class="text" type="text" name="email" id="email" value="<?php echo isset($_POST["email"]) ? $_POST["email"] : "" ?>" /></div>
							</div>
							<div class="field">
								<div class="indicator"><label for="message">Message</label></div>
								<div class="singleInput"><textarea id="message" name="message"><?php echo isset($_POST["message"]) ? $_POST["message"] : "" ?></textarea></div>
							</div>						
							<div class="actions">
								<input type="submit" name="sendMessage" value="Submit" />
							</div>
							
						</form>
					<?php } ?>
				</div>
			</div>
		</div>
		
		<div id="footer">
			<div id="footerInner">
				<p class="copyright">&copy; Copyright 2009 Capital Rentals</p>
				<p class="design">Website design: <a href="http://www.adoromedia.com">Adoro Media</a></p>
			</div>
		</div>
		
	</body> 
</html>