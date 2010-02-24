<!DOCTYPE html>
<?php
	$metaKeywords = "adoro media, website design, website development, london";
	$metaDescription = "Adoro Media is a website design and development agency. Based in London.";
	$siteSection = "contact";
?>
<html lang="en"> 
	<head>
		<title>Contact St Andrews House, Solent Serviced Offices based in Gatwick</title> 
		<meta charset="utf-8" /> 
		<meta name="robots" content="all,index,follow" /> 
		<?php include("inc/globalJs.php"); ?>
		<script src="http://maps.google.com/maps?file=api&amp;v=2&amp;key=ABQIAAAAcCPnNaC9ucSS0iuyWMhdNhSRzqVAvSH2EqOQ921DUd7Df9NMbxRb0xJQDPO-txXGN07SrOmhr1spig" type="text/javascript"></script>
		<script type="text/javascript" src="js/Adoro/Adoro.GoogleMap.js"></script>
		<script type="text/javascript" src="js/App/App.Map.js"></script>
		<?php include("inc/globalCss.php"); ?>
		<?php include("inc/globalCssIe.php"); ?>
	</head> 
	<body id="pgContact">
		<div id="container">
			<div id="header">
				<?php include("inc/logo.php"); ?>
				<div id="testimonial">
					
					<p class="quote">
						<span>&#34;</span>Some sort of quote or one liner here, <br/>
						two lines is better than one i think...<span>&#34;</span>
					</p>
					<p class="person">Jo Bloggs, Service Co.</p>
				</div>
			</div>
			<?php include("inc/nav.php"); ?>
						
			<div id="content">
				<div id="breadcrumb">
					<p>You are viewing:</p>
					<ul>
						<li>Contact</li>
					</ul>
				</div>
				
				<div id="primary">
					
					<div id="contact">
						<h1>Contact St Andrews House</h1>
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
						
						<p>To call us: telephone 01293 543641</p>
						
						<p>To email us: enquiries@standrews-house.com </p>
						
					</div>
					
					<div id="enquiryForm">
						<h2>Enquiry form</h2>
						
						<form action="#" method="post">
							<div class="field">
								<div class="indicator">
									<label for="yourname">
										Your name:
									</label>
								</div>
								<div class="singleInput">
									<input type="text" class="text" name="yourname" id="yourname" />
								</div>
							</div>
							<div class="field">
								<div class="indicator">
									<label for="email">
										Your email:
									</label>
								</div>
								<div class="singleInput">
									<input type="text" class="text" name="email" id="email" />
								</div>
							</div>
							<div class="field">
								<div class="indicator">
									<label for="message">
										Your message:
									</label>
								</div>
								<div class="singleInput">
									<textarea name="message" id="message"></textarea>
								</div>
							</div>
							<div class="actions">
								<input type="submit" name="send" id="send" value="Send enquiry" />
							</div>
						</form>
						
					</div>
				</div>
			</div>
			<?php include("inc/footer.php"); ?>			
		</div>
	</body> 
</html>