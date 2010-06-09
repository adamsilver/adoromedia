<?php $cssSelected = "selected";?>
<div id="primaryNavigation">
	<div id="primaryNavigationInner">
		<ul>
			<li class="<?php if($siteSection == "home") echo $cssSelected; ?>"><a href="index.php"><span>Home</span></a></li>
			<li class="<?php if($siteSection == "claim") echo $cssSelected; ?>"><a href="claim.php"><span>Claim form</span></a></li>
			<li class="<?php if($siteSection == "about") echo $cssSelected; ?>"><a href="about.php"><span>About us</span></a></li>
			<li class="<?php if($siteSection == "services") echo $cssSelected; ?>"><a href="services.php"><span>Our services</span></a></li>
			<li class="<?php if($siteSection == "faq") echo $cssSelected; ?>"><a href="faq.php"><span>FAQs</span></a></li>
			<li class="contact <?php if($siteSection == "contact") echo $cssSelected; ?>"><a href="contact.php"><span>Contact details</span></a></li>
		</ul>
	</div>
</div>