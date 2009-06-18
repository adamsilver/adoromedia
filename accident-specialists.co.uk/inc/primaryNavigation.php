<?php $cssSelected = "selected";?>
<div id="primaryNavigation">
	<ul>
		<li class="<?php if($siteSection == "home") echo $cssSelected; ?>"><a href="#">Home</a></li>
		<li class="<?php if($siteSection == "claim") echo $cssSelected; ?>"><a href="#">Claim</a></li>
		<li class="<?php if($siteSection == "about") echo $cssSelected; ?>"><a href="#">About</a></li>
		<li class="<?php if($siteSection == "contact") echo $cssSelected; ?>"><a href="#">Contact</a></li>
	</ul>
</div>