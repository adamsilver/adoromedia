<?php
	$formCallMeBack = new FormValidator();
	$formCallMeBack->addValidator("yourname", array(new Rule("isNotEmpty", "Your name cannot be empty")));
	$formCallMeBack->addValidator("email", array(new Rule("isNotEmpty", "Email cannot be empty")));
	$formCallMeBack->addValidator("message", array(new Rule("isNotEmpty", "Message cannot be empty")));
?>
