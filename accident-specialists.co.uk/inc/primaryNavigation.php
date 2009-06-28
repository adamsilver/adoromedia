<?php $cssSelected = "selected";?>
<div id="primaryNavigation">
	<ul>
		<li class="<?php if($siteSection == "home") echo $cssSelected; ?>"><a href="index.php"><span>Home</span></a></li>
		<li class="<?php if($siteSection == "claim") echo $cssSelected; ?>"><a href="claim.php"><span>Claim</span></a></li>
		<li class="<?php if($siteSection == "about") echo $cssSelected; ?>"><a href="about.php"><span>About</span></a></li>
		<li class="<?php if($siteSection == "services") echo $cssSelected; ?>"><a href="services.php"><span>Services</span></a></li>
		<li class="contact <?php if($siteSection == "contact") echo $cssSelected; ?>"><a href="contact.php"><span>Contact</span></a></li>
	</ul>
</div>