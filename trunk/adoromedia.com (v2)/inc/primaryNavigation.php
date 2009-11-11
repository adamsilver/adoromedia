<?php $cssSelected = "selected";?>
<div id="primaryNavigation">
	<ul>
		<li id="pnHome"><a href="index.php" class="<?php if($siteSection == "home") echo $cssSelected; ?>">Home</a></li>
		<li id="pnAbout"><a href="about.php" class="<?php if($siteSection == "about") echo $cssSelected; ?>">About</a></li>
		<li id="pnServices"><a href="services.php" class="<?php if($siteSection == "services") echo $cssSelected; ?>">Services</a></li>
		<li id="pnPortfolio"><a href="portfolio.php" class="<?php if($siteSection == "portfolio") echo $cssSelected; ?>">Portfolio</a></li>
		<li id="pnContact" class="last"><a href="contact.php" class="<?php if($siteSection == "contact") echo $cssSelected; ?>">Contact</a></li>
	</ul>
</div>
