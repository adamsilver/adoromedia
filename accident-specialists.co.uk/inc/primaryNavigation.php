<?php $cssSelected = "selected";?>
<div id="primaryNavigation">
	<ul>
		<li class="<?php if($siteSection == "home") echo $cssSelected; ?>"><a href="index.php">Home</a></li>
		<li class="<?php if($siteSection == "claim") echo $cssSelected; ?>"><a href="claim.php">Claim</a></li>
		<li class="<?php if($siteSection == "about") echo $cssSelected; ?>"><a href="about.php">About</a></li>
		<li class="<?php if($siteSection == "services") echo $cssSelected; ?>"><a href="services.php">Services</a></li>
		<li class="contact <?php if($siteSection == "contact") echo $cssSelected; ?>"><a href="contact.php">Contact</a></li>
	</ul>
</div>