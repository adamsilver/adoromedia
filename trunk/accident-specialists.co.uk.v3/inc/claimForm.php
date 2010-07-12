<?php
	$formClaim = new FormValidator();
	$formClaim->addValidator("basicDescription", array(new Rule("isNotEmpty", "Basic description required")));
	$formClaim->addValidator("fullName", array(new Rule("isNotEmpty", "Full name required")));
	$formClaim->addValidator("dayTimePhone", array(new Rule("isNotEmpty", "Daytime phone number required")));
	$formClaim->addValidator("addressLine1", array(new Rule("isNotEmpty", "Address required")));
	$formClaim->addValidator("postCode", array(new Rule("isNotEmpty", "Post code required")));
	
	
	//$formClaim->addValidator("phone", array(new Rule("isNotEmpty", "Phone number required")));
?>
