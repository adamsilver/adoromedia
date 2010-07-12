<?php
	$formCallMeBack = new FormValidator();
	$formCallMeBack->addValidator("fullName", array(new Rule("isNotEmpty", "Full name required")));
	$formCallMeBack->addValidator("phone", array(new Rule("isNotEmpty", "Phone number required")));
	//$formCallMeBack->addValidator("postCode", array(new Rule("isNotEmpty", "Post code required")));
	//$formCallMeBack->addValidator("email", array(new Rule("isNotEmpty", "Email required")));
?>
